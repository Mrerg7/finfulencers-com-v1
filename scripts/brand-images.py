"""Generate the social card and home-screen icons. Run from anywhere."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1] / "public"
SANS = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
SANS_BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"

INK = (7, 40, 73)
INK_DEEP = (4, 24, 44)
GOLD = (217, 119, 6)
WHITE = (255, 255, 255)
MUTED = (186, 205, 219)


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


def icon(size: int) -> Image.Image:
    img = Image.new("RGB", (size, size), INK)
    draw = ImageDraw.Draw(img)
    pad = int(size * 0.22)
    bar_h = max(3, size // 18)
    draw.rounded_rectangle((pad, int(size * 0.22), size - pad, int(size * 0.22) + bar_h), radius=bar_h, fill=GOLD)
    glyph = font(SERIF, int(size * 0.48))
    text = "F"
    box = draw.textbbox((0, 0), text, font=glyph)
    tw, th = box[2] - box[0], box[3] - box[1]
    draw.text(((size - tw) / 2 - box[0], (size - th) / 2 - box[1] + size * 0.04), text, font=glyph, fill=WHITE)
    return img


def og() -> Image.Image:
    w, h = 1200, 630
    img = Image.new("RGB", (w, h), INK_DEEP)
    draw = ImageDraw.Draw(img)
    for y in range(h):
        t = y / (h - 1)
        color = tuple(int(INK_DEEP[i] * (1 - t) + INK[i] * t) for i in range(3))
        draw.line([(0, y), (w, y)], fill=color)
    draw.rectangle((72, 78, 72 + 96, 84), fill=GOLD)
    draw.text((72, 108), "DOMAIN FOR ACQUISITION", font=font(SANS_BOLD, 22), fill=GOLD)
    draw.text((72, 186), "finfulencers.com", font=font(SERIF, 92), fill=WHITE)
    draw.text((72, 310), "The brandable .com for finance influencers", font=font(SANS, 32), fill=MUTED)
    draw.rectangle((72, 430, 1128, 431), fill=(255, 255, 255, 40))
    draw.text((72, 470), "Media  ·  Agencies  ·  Newsletters  ·  Fintech", font=font(SANS, 24), fill=WHITE)
    draw.text((72, 540), "Confidential inquiries", font=font(SANS, 22), fill=MUTED)
    return img


def main() -> None:
    ROOT.mkdir(parents=True, exist_ok=True)
    icon(180).save(ROOT / "apple-touch-icon.png", optimize=True)
    icon(512).save(ROOT / "icon-512.png", optimize=True)
    og().save(ROOT / "og-image.png", optimize=True)
    print("wrote icons and og-image")


if __name__ == "__main__":
    main()
