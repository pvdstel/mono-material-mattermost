# Monochrome Material Mattermost

Monochrome Material themes for Mattermost

## Themes

This theme repository currently contains a number of themes:

| Name         | Description                                                                     |
|--------------|---------------------------------------------------------------------------------|
| Bright       | An extremely bright theme. It uses mostly pure whites and light grays for text. |
| Light        | A fairly simple light theme. Still fairly bright, but much easier on the eyes.  |
| Mixed        | A dark sidebar with a light messaging panel.                                    |
| Mixed Bright | A dark sidebar with a bright messaging panel.                                   |
| Metal        | Basically Dark but the messaging panel is not as dark.                          |
| Dark         | A beautiful and sleek dark theme.                                               |
| OLED         | Almost completely black, using grays for text. Very suitable for OLED screens.  |

## Accent generator

An accent generator is included. It can be invoked using NodeJS as follows:

```
node generate-accent <theme> <color1> <other colors> [-p] [-a]
```

The `-p` switch pretty-prints the JSON output, and the `-a` switch applies the first color to all elements that accept an accent color.

The colors may be passed with or without a leading `#`, but should be in hexadecimal format. The script contains a list of *n* theme elements that may receive an accent color. If *m* colors are given as arguments, *min(n, m)* colors are replaced, in order.

The values `'!'` and `'skip'` are special, and may be used instead of a color to skip a replacement. This allows for a replacement of the first and third color, while skipping the second. The list currently consists of the following theme elements:

1. `sidebarTextActiveBorder`
2. `sidebarTextActiveColor`
3. `linkColor`
4. `buttonBg`
5. `mentionHighlightLink`

**ProTip!** Pipe the output to a clipboard utility for easy copying.
