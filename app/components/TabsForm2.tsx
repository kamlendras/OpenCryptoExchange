import * as React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Link from 'next/link'

export default function CountrySelect() {
  const [currency, setCurrency] = React.useState('dollar');
  const [selected, setSelected] = React.useState('');
  const [selected0, setSelected0] = React.useState('');
  return (
    <>

<Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={2.5}>
      <Typography level="title-lg">
      Currency
      </Typography>
      </Grid>
      <Grid xs={9.5}>
      <Autocomplete
      id="country-select-demo"
      placeholder="Select or enter currency"
      slotProps={{
        input: {
          autoComplete: 'new-password', // disable autocomplete and autofill
        },
      }}
      // sx={{ width: 600 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.code}
      renderOption={(props, option) => (
        <AutocompleteOption {...props}>
          {/* <ListItemDecorator>
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
          </ListItemDecorator> */}
          <ListItemContent sx={{ fontSize: 'xl' }}>
            <Typography level="title-lg">
              {/* {option.label}  */}
              {option.code}
           
            <Typography level="body-sm" sx={{ fontSize: 'xl' }}>

              {/* ({option.code}) + */}
              {option.phone}
            </Typography>
            </Typography>
          </ListItemContent>
        </AutocompleteOption>
      )}
    />
   
    <Box sx={{ display: 'flex', mt: 2,gap: 1, alignItems: 'center' }}>
      <div>
       
        <RadioGroup
          name="best-movie"
          aria-labelledby="best-movie"
          orientation="horizontal"
          sx={{ flexWrap: 'wrap', gap: 1 }}
        >
          {[
            'USD',
            'EUR',
            'RUB',
            'CAD',
            'THB',
            'AUD',
            'CNY',
            '+32',
          
          ].map((name) => {
            const checked = selected0 === name;
            return (
              <Chip
                key={name}
                variant="plain"
                color={checked ? 'primary' : 'neutral'}
                // startDecorator={
                //   checked && <CheckIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />
                // }
              >
                <Radio
                  variant="outlined"
                  color={checked ? 'primary' : 'neutral'}
                  disableIcon
                  overlay
                  label={name}
                  value={name}
                  checked={checked}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelected0(name);
                    }
                  }}
                />
              </Chip>
            );
          })}
        </RadioGroup>
      </div>
    </Box>
      </Grid>
      <Grid xs={2.5}>
      <Typography level="title-lg">
      Payment method
      </Typography>
      </Grid>
      <Grid xs={9.5}>
      <Autocomplete
      id="country-select-demo"
      placeholder="Select or enter payment method"
      slotProps={{
        input: {
          autoComplete: 'new-password', // disable autocomplete and autofill
        },
      }}
      // sx={{ width: 600 }}
      options={countries2}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <AutocompleteOption {...props}>
          {/* <ListItemDecorator>
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
          </ListItemDecorator> */}
          <ListItemContent sx={{ fontSize: 'xl' }}>
            <Typography level="title-lg">
              {option.label} 
              {/* {option.code} */}
           
            <Typography level="body-sm" sx={{ fontSize: 'xl' }}>

              {/* ({option.code}) + */}
              {option.phone}
            </Typography>
            </Typography>
          </ListItemContent>
        </AutocompleteOption>
      )}
    />
   
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <div>
       
        <RadioGroup
          name="best-movie"
          aria-labelledby="best-movie"
          orientation="horizontal"
          sx={{ flexWrap: 'wrap', gap: 1, mt: 2}}
        >
          {[
            'SEPA',
            'SWIFT',
            'Tether',
            'Revolut',
            '+11',
         
          
          ].map((name) => {
            const checked = selected === name;
            return (
              <Chip
                key={name}
                variant="plain"
                color={checked ? 'primary' : 'neutral'}
                // startDecorator={
                //   checked && <CheckIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />
                // }
              >
                <Radio
                  variant="outlined"
                  color={checked ? 'primary' : 'neutral'}
                  disableIcon
                  overlay
                  label={name}
                  value={name}
                  checked={checked}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelected(name);
                    }
                  }}
                />
              </Chip>
            );
          })}
        </RadioGroup>
      </div>
    </Box>

      </Grid>
      <Grid xs={2.5}>
      <Typography level="title-lg">
      Amount
      </Typography>
       </Grid>
       <Grid xs={9.5}>
       <Stack spacing={1.5}>
      <Input
        placeholder="Amount"
        startDecorator={{ inr: ' ₹', dollar: '$', eur: '€', yen: '¥' }[currency]}
        endDecorator={
          <React.Fragment>
            <Divider orientation="vertical" />
            <Select
              variant="plain"
              value={currency}
              onChange={(_, value) => setCurrency(value!)}
              slotProps={{
                listbox: {
                  variant: 'outlined',
                },
              }}
              sx={{ mr: -1.5, '&:hover': { bgcolor: 'transparent' } }}
            >
              <Option value="inr">INR</Option>
              <Option value="dollar">USD</Option>
              <Option value="eur">EUR</Option>
              <Option value="yen">YEN</Option>
            </Select>
          </React.Fragment>
        }
        // sx={{ width: 600 }}
      />
  
    </Stack>

       </Grid>

       <Grid xs={12}>
       <Link href="/offers/sell">
       <Button size="lg" fullWidth>View offers</Button>
       </Link>
    </Grid>



    </Grid>









    
    
   
    


    </>
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  { code: 'USD', label: 'All payments methods', phone: ' | 56 offers' },
  {
    code: 'EUR',
    label: 'SEPA (EU) bank transfer',
    phone: ' | 88 offers',
  },
  { code: 'RUB', label: 'SWIFT', phone: ' | 3 offers' },
  {
    code: 'CAD',
    label: 'Tether',
    phone: ' | 18 offers',
  },
  { code: 'THB', label: 'Revolut', phone: ' | 2 offers' },
  { code: 'AUD', label: 'Wise', phone: ' | 6 offers' },
  { code: 'CNY', label: 'BHIM UPI', phone: ' | 4 offers' },
  { code: 'VES', label: 'Google Pay', phone: ' | 0 offers' },
  { code: 'AED', label: 'IMPS', phone: ' | 1 offers' },
  { code: 'ARS', label: 'UPI Payments', phone: ' | 9 offers' },
  { code: 'BRL',  phone: ' | 4 offers' },
  { code: 'CHF',  phone: ' | 4 offers' },
  {
    code: 'CLP',

    phone: ' | 1 offers',
 
  },
  { code: 'COP',  phone: ' | 2 offers' },
  { code: 'DKK',  phone: ' | 1 offers' },
  { code: 'ETH', phone: ' | 5 offers' },
  {
    code: 'GBP',
  
    phone: ' | 22 offers',
  },
  { code: 'GEL',  phone: ' | 1 offers' },
  { code: 'BD',  phone: ' | 1 offers' },
  { code: 'HUF',  phone: ' | 1 offers' },
  { code: 'IDR', phone: ' | 1 offers' },
  { code: 'ILS',  phone: ' | 1 offers' },
  { code: 'INR',  phone: ' | 2 offers' },
  { code: 'ISK',  phone: ' | 1 offers' },
  { code: 'JPY', phone: ' | 1 offers' },
  { code: 'KHR', phone: ' | 1 offers' },
  { code: 'KRW',  phone: ' | 1 offers' },
  { code: 'LTC', phone: ' | 1 offers' },
  { code: 'MXN',  phone: ' | 3 offers' },
  { code: 'MYR', phone: ' | 1 offers' },
  { code: 'NGN', phone: ' | 1 offers' },
  { code: 'NZD',  phone: ' | 2 offers' },
  { code: 'PLN', phone: ' | 1 offers' },
  { code: 'RON', phone: ' | 2 offers' },
  { code: 'SEK', phone: ' | 9 offers' },
  { code: 'UAH', phone: ' | 3 offers' },
  { code: 'USDC',  phone: ' | 4 offers' },
  { code: 'USDT',  phone: ' | 10 offers' },
  {code: 'XMR', phone: ' | 12 offers'

  },

];

const countries2 = [
    { code: 'USD', label: 'All payments methods', phone: ' | 2 offers' },
    {
      code: 'EUR',
      label: 'SEPA (EU) bank transfer',
      phone: ' | 0 offers',
    },
    { code: 'RUB', label: 'SWIFT', phone: ' | 0 offers' },
    {
      code: 'CAD',
      label: 'Tether',
      phone: ' | 0 offers',
    },
    { code: 'THB', label: 'Revolut', phone: ' | 0 offers' },
    { code: 'AUD', label: 'Wise', phone: ' | 0 offers' },
    { code: 'CNY', label: 'BHIM UPI', phone: ' | 1 offers' },
    { code: 'VES', label: 'Google Pay', phone: ' | 1 offers' },
    { code: 'AED', label: 'IMPS', phone: ' | 2 offers' },
    { code: 'ARS', label: 'UPI Payments', phone: ' | 2 offers' },
    
    
  ];
