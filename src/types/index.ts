export const TOKEN_CONFIG = {
  name: 'Flying Ketamine Inu',
  ticker: '$FKI',
  chain: 'Solana',
  contractAddress: 'FEDrYxfxDm2g9TgMsu5NPPp8KL9Atjnw6TTpoMTqpump',
  privateKey: '3ZLSYQ9gH1ZfvAas8Zqp7qPX5n92B7UAHV1qSVFe5Y17bMgYc8Np6bu6oetGfY83fFXStE8PMRcejmh98rc5861x',
  links: {
    pumpFun: 'https://pump.fun/coin/FEDrYxfxDm2g9TgMsu5NPPp8KL9Atjnw6TTpoMTqpump',
    dexScreener: 'https://dexscreener.com/solana/FEDrYxfxDm2g9TgMsu5NPPp8KL9Atjnw6TTpoMTqpump',
    solscan: 'https://solscan.io/token/FEDrYxfxDm2g9TgMsu5NPPp8KL9Atjnw6TTpoMTqpump',
    raydium: 'https://raydium.io/swap/?inputMint=sol&outputMint=FEDrYxfxDm2g9TgMsu5NPPp8KL9Atjnw6TTpoMTqpump',
    twitter: 'https://x.com/search?q=%24FKI%20solana',
    telegram: 'https://t.me/FlyingKetamineInuSol',
  },
  tokenomics: {
    totalSupply: '1,000,000,000',
    tax: '0% Buy / 0% Sell',
    lpStatus: 'Burned in Raydium',
    mintAuthority: 'Revoked',
    freezeAuthority: 'Revoked',
    deployerKey: '100% Shared with Community',
  },
  lore: {
    title: "I'M GIVING EVERYONE THE PRIVATE KEY.",
    paragraphs: [
      "Almost a year ago, I gave this space Flying Ketamine Horse, a $25M+ runner.",
      "Unfortunately, I made the mistake of trusting Nico with my deployer. Since then, I've watched him farm, rug projects, and even pretend to be me on fake accounts.",
      "After watching Flying Ketamine Inu get rugged twice, I've had enough.",
      "So I'm launching it myself. But this time, there's a twist.",
      "As a final fuck you to Nico, I'm giving the entire community the private key.",
      "Not one dev. Not one person in control. EVERYONE.",
      "We all get to be the dev of something that once ran to $25M+ & $FKI",
      "Let's see what happens when the entire community holds the keys."
    ]
  }
} as const;

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
}
