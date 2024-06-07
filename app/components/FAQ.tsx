import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';

export default function AccordionIndicator() {
  return (
    <>
      <Typography sx={{fontSize:66, mb:3}}  level="h1">Frequently Asked Questions</Typography>
    <div>
   

    <AccordionGroup
      sx={{
        // maxWidth: 400,
        [`& .${accordionSummaryClasses.indicator}`]: {
          transition: '0.2s',
        },
        [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
          transform: 'rotate(45deg)',
        },
      }}
    >
      <Accordion >
        <AccordionSummary indicator={<AddIcon />}><Typography sx={{fontSize:33}}  level="title-sm">Which problems are we solving?</Typography></AccordionSummary>
        <AccordionDetails>
        <Typography sx={{fontSize:33}}  level="body-lg">   Offering fast and easy Monero cash-out without middle-party and verification.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary indicator={<AddIcon />}><Typography sx={{fontSize:33}} level="title-sm">How do I start?</Typography></AccordionSummary>
        <AccordionDetails>
        <Typography  level="body-lg" sx={{fontSize:33}}>    Sign up with an email address and password, follow the confirmation link sent to your email <br/> address, engage in contracts right away!
        </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary indicator={<AddIcon />}><Typography sx={{fontSize:33}}  level="title-sm">What cryptocurrencies are available?</Typography></AccordionSummary>
        <AccordionDetails>
        <Typography  level="body-lg"sx={{fontSize:33}}> Monero, Bitcoin, Ethereum, Litecoin, Nano, Dash.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary indicator={<AddIcon />}><Typography  level="title-sm" sx={{fontSize:33}}> What do I need to start trading?</Typography></AccordionSummary>
        <AccordionDetails>
        <Typography sx={{fontSize:33}} level="body-lg">Open Crypto Exchange does not operate any wallets, this means that in order to buy or sell Monero you<br/> need to have a wallet on your own.
        </Typography>
       </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary indicator={<AddIcon />}><Typography sx={{fontSize:33}}  level="title-sm">First time visiting us?</Typography></AccordionSummary>
        <AccordionDetails>
        <Typography sx={{fontSize:33}}  level="body-lg">    We have guides for you on <Link href="#guide" sx={{fontSize:33}}  level="title-sm">how to start using our trading platform.</Link>
        </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
    
    </div>
    </>
  );
}
