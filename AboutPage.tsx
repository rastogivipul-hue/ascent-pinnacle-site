import React from 'react';
import { Quote, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { FadeIn } from './UI';

// --- IMAGE IMPORTS ---
// Make sure these filenames match EXACTLY what you uploaded to GitHub
import vkrpic from './AP VKR.jpg';
import srjipic from './AP SRji.jpg';
import akpic from './AP AK.jpg';

const TEAM_MEMBERS = [
  {
    name: "Subhash Rastogi",
    role: "Chairman",
    imageUrl: srjipic, // <--- Using the imported variable
    linkedin: "https://www.linkedin.com/in/subhash-rastogi-b3993414/",
    email: "srastogi@ascentpinnacle.com",
    bio: [
      "Subhash Rastogi brings over four decades of international business leadership, cross-border exposure, and deep banking relationships to Ascent Pinnacle Capital. His career spans global markets where he managed large-scale operations, built enduring partnerships, and navigated complex financial landscapes with precision. Having worked extensively with international suppliers, financial institutions, and strategic partners, he has developed a strong command over global trade dynamics, credit structures, and institutional banking practices. His long-standing relationships across major banking networks remain a key strategic asset for the firm. As Chairman, he provides strategic direction, governance, and high-level oversight, ensuring the firm operates with discipline, integrity, and global perspective. His experience strengthens Ascent Pinnacle’s ability to engage confidently with lenders, investors, and partners across markets, anchoring the firm’s commitment to trust-led, long-term value creation."
    ]
  },
  {
    name: "Vipul Rastogi", // Change this to their real name
    role: "Managing Director",
    imageUrl: vkrpic, // <--- Using the imported variable
    linkedin: "www.linkedin.com/in/vipul-rastogi-ba65a762",
    email: "vkr@ascentpinnacle.com",
    bio: [
      "Vipul Rastogi is an investment banking professional with deep expertise in debt syndication, structured financing, and closing complex transactions across real estate, infrastructure, and mid-market sectors. He is known for unlocking capital in challenging situations through strong lender relationships, disciplined structuring, and sharp negotiation.

With a robust network across banks, NBFCs, AIFs, family offices, and global investors, Vipul consistently executes high-stakes mandates with speed and precision. Under his leadership, Ascent Pinnacle is transitioning from a boutique advisory into a broader investment platform with a planned Category-II AIF focused on special opportunities and structured credit.

He is recognized for his clarity, integrity, and ability to drive outcomes in the most demanding financial environments."
    ]
  },
  {
    name: "Ashish Kumar", // Change this to their real name
    role: "Director - Debt Syndication",
    imageUrl: akpic, // <--- Using the imported variable
    linkedin: "https://www.linkedin.com/in/ashish-kumar-92a93b12b/",
    email: "ashish.kumar@ascentpinnacle.com",
    bio: [
      "Ashish Kumar brings strong analytical depth and hands-on execution experience across debt syndication, structured credit, and special situation transactions. He is skilled in financial modeling, credit evaluation, transaction documentation, and end-to-end deal management.

Ashish plays a critical role in navigating complex mandates, coordinating with lenders, and ensuring smooth closure of transactions under tight timelines. His disciplined approach, sharp problem-solving, and commitment to precision make him a key contributor to Ascent Pinnacle’s growing transaction capability.

He works closely with promoters, NBFCs, banks, and AIFs, supporting the firm’s mission of delivering reliable, high-quality capital solutions."
    ]
  }
];

// ... (Keep the rest of the file below this line exactly the same)
