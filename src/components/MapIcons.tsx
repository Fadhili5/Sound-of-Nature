const createColoredIcon = (color: string) => `
  <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
    <circle cx="19" cy="19" r="16" fill="${color}" stroke="white" stroke-width="2"/>
  </svg>
`;

export const icons = {
  forest: `data:image/svg+xml;base64,${btoa(createColoredIcon('#2F855A'))}`,
  lake: `data:image/svg+xml;base64,${btoa(createColoredIcon('#2B6CB0'))}`,
  beach: `data:image/svg+xml;base64,${btoa(createColoredIcon('#D69E2E'))}`,
  mountain: `data:image/svg+xml;base64,${btoa(createColoredIcon('#4A5568'))}`,
}; 