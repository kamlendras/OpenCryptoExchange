"use client";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import * as React from "react";
import { Transition } from 'react-transition-group';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import NextLink from 'next/link'
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Grid from "@mui/joy/Grid";
import Table from "@mui/joy/Table";
import Chip from "@mui/joy/Chip";
import StepIndicator from "@mui/joy/StepIndicator";
import Tooltip from "@mui/joy/Tooltip";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/joy/styles";
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import Footer from "../footer";
import MyMessages from "./chatbox/MyMessages";
import RejectButton from "./RejectButton"
export default function C() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [currency, setCurrency] = React.useState("inr");
  const [currency1, setCurrency1] = React.useState("btc");
  // const [selected, setSelected] = React.useState("");
  
  const [selected0, setSelected0] = React.useState("");
  
  const [size, setSize] = React.useState<ModalDialogProps['size'] | null>(
    null,
  );
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
    <>
      <Box sx={{ m: 10 }}>
        <Typography level="h1">CONTRACT TO BUY XMR</Typography>
        <Grid container spacing={2} sx={{ flexGrow: 1 }} >
          <Grid sm={7} lg={7} xl={7}>
        <Sheet
          variant="soft"
          aria-label="Pricing plan"
          defaultValue={0}
          sx={{
            borderRadius: "lg",
            boxShadow: "xl",
            overflow: "auto",
            mt: 3,
            p: 4,
          }}
          color="neutral"
        >
        
          <Table>
          

            <tbody>
              {datatable.map((option) => {
                return (
                  <tr>
                   
                    <td>
                      {" "}
                      <Typography sx={{ fontSize: 22 }} level="title-md">
                        <Typography level="body-xs" sx={{ fontSize: 22 }}>
                          {" "}
                          Price{" "}
                        </Typography>{" "}
                        {option.price}
                        <br />
                        <Typography level="body-xs" sx={{ fontSize: 22 }}>
                          {" "}
                          Buy XMR{" "}
                        </Typography>{" "}
                        {option.BuyCrypto}
                        <br />
                        <Typography level="body-xs" sx={{ fontSize: 22 }}>
                          {" "}
                          Pay{" "}
                        </Typography>{" "}
                        {option.Pay}
                      </Typography>
                   
                    </td>

                    <td>
                      {" "}
                      <Typography level="body-md">
                        <Typography level="body-xs" sx={{ fontSize: 22 }}>
                          {" "}
                          Location{" "}
                        </Typography>
                        {option.Location} <br />
                        <Typography level="body-xs" sx={{ fontSize: 22 }}>
                          {" "}
                          Payment window{" "}
                          <Tooltip
                            placement="top-start"
                            variant="solid"
                            arrow
                            title={
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  maxWidth: 320,
                                  justifyContent: "center",
                                  p: 1,
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    // gap: 1,
                                    width: "100%",
                                    mt: 1,
                                  }}
                                >
                                  <div>
                                    <Typography sx={{ fontSize: 15, mb: 1 }}>
                                      The payment window is the time within
                                      which the Buyer must complete the payment.
                                      The timeframe must reflect the selected
                                      payment method. When the payment window
                                      runs out, the Seller can cancel the
                                      contract or start the dispute if the
                                      payment has been initiated but not
                                      received.
                                    </Typography>
                                  </div>
                                </Box>
                              </Box>
                            }
                          >
                            <HelpOutlineIcon
                              fontSize="inherit"
                              color="primary"
                            />
                          </Tooltip>
                        </Typography>
                       
                        {option.paymentwindow} min.
                        <br />
                        <Typography level="body-xs" sx={{ fontSize: 22 }}>
                          {" "}
                          XMR confirmations
                        </Typography>{" "}
                        1 <br />
                        <Typography level="body-xs" sx={{ fontSize: 22 }}>
                          {" "}
                          Payment method{" "}
                          <Chip
                            variant="outlined"
                            // color={option.ColorPaymentMethodSelected}
                          >
                            {option.PaymentMethodSelected}
                          </Chip>
                        </Typography>
                      </Typography>
                    </td>
                    
                    <td>
                      <Sheet
                        variant="outlined"
                        aria-label="Pricing plan"
                        defaultValue={0}
                        style={{ whiteSpace: "pre-wrap" }}
                        sx={{
                          //    width: 750,
                          borderRadius: "lg",
                          // boxShadow: "xl",
                          overflow: "auto",
                          mt: 3,
                          p: 4,
                        }}
                        color="neutral"
                        //  sx={{ p: 4 }}
                      >
                        <Typography
                          level="body-md"
                          sx={{ wordBreak: "break-word" }}
                        >
                          {" "}
                          Monero release address
                        
                          <Link>
                            <div
                              style={{
                                display: "inline-block",
                                whiteSpace: "pre-line",
                              }}
                            >
                              {option.CryptoCurrencyAddress}{" "}
                            </div>
                            <OpenInNewOutlinedIcon />
                          </Link>
                        </Typography>
                      </Sheet>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Sheet>

        <Sheet
          variant="plain"
          aria-label="Pricing plan"
          defaultValue={0}
          sx={{
            //    width: 750,
            borderRadius: "lg",
            boxShadow: "xl",
            overflow: "auto",
            mt: 3,
            p: 4,
          }}
          color="neutral"
          //  sx={{ p: 4 }}
        >
          <Typography level="title-sm">The Buyer has been waiting. </Typography>
              <Typography level="body-md">Deposited the Monero on Open Crypto Exchange Server  (multisig escrow)</Typography>
          


              <Sheet
          variant="soft"
          aria-label="Pricing plan"
          defaultValue={0}
          sx={{
            //    width: 750,
            borderRadius: "lg",
            // boxShadow: "xl",
            overflow: "auto",
            mt: 3,
            p: 4,
          }}
          color="neutral"
          //  sx={{ p: 4 }}
        >
          <Stack direction="row">
            <Box sx={{m:1}}>
<Typography level="body-sm">Price per XMR</Typography>
<Typography level="title-sm">N/A USD</Typography>
</Box>
<Box sx={{m:1}}>
<Typography level="body-sm">XMR to buy</Typography>
<Typography level="title-sm">N/A</Typography>
</Box>
<Box sx={{m:1}}>
<Typography level="body-sm">Amount to pay</Typography>
<Typography level="title-sm">40,000.01 USD</Typography>
</Box>
</Stack>
</Sheet>
<RejectButton/>
      </Sheet>
      </Grid>
      <Grid sm={5} md={5} xl={5} lg={5}>
      <Sheet
          variant="plain"
          aria-label="Pricing plan"
          defaultValue={0}
          sx={{
            //    width: 750,
            borderRadius: "lg",
            boxShadow: "xl",
            overflow: "auto",
            mt: 3,
            p: 4,
          }}
          color="neutral"
          //  sx={{ p: 4 }}
        >


<Box component="main" className="MainContent" sx={{ flex: 1 }}>
          <MyMessages />
        </Box>
            </Sheet>
    </Grid>

            </Grid>
          <Stepper sx={{ mt: 4 }}>
            <Step
              orientation="vertical"
              indicator={
                <StepIndicator variant="solid" color="primary">
                  1
                </StepIndicator>
              }
            >
              {" "}
              <Typography style={{ color: "#1565c0" }}>
              You are creating an offer{" "}
              </Typography>
            </Step>
            <Step
              orientation="vertical"
              indicator={
                <StepIndicator variant="solid" color="primary">
                  2
                </StepIndicator>
              }
            >
              {" "}
              <Typography style={{ color: "#1565c0" }}>
                You are engaging in contract, generate escrow address by
                confirming your payment password
              </Typography>
            </Step>
            <Step
              orientation="vertical"
              indicator={<StepIndicator variant="solid" color="primary">3</StepIndicator>}
            > <Typography style={{ color: "#1565c0" }}>
              The Seller deposits Monero in the multisig escrow
              </Typography>
            </Step>
            <Step
              orientation="vertical"
              indicator={<StepIndicator variant="outlined">4</StepIndicator>}
            >
              The Buyer sends the payment to the Seller
            </Step>
            <Step
              orientation="vertical"
              indicator={<StepIndicator variant="outlined">5</StepIndicator>}
            >
              Contract is completed, the Buyer receives the Monero
            </Step>
          </Stepper>
        

      </Box>
      <Footer />
    </>
  );
}

const options = [
  {
    id: "11",
    code: "USD",
    label: "All payments methods",
    phone: " | 56 offers",
  },
  {
    id: "12",
    code: "EUR",
    label: "SEPA (EU) bank transfer",
    phone: " | 88 offers",
  },
  { id: "31", code: "RUB", label: "SWIFT", phone: " | 37 offers" },
  { id: "32", code: "CAD", label: "Tether", phone: " | 18 offers" },
  { id: "13", code: "THB", label: "Revolut", phone: " | 2 offers" },
  { id: "14", code: "AUD", label: "Wise", phone: " | 6 offers" },
  { id: "15", code: "CNY", label: "BHIM UPI", phone: " | 4 offers" },
  { id: "16", code: "VES", label: "Google Pay", phone: " | 0 offers" },
  { id: "17", code: "AED", label: "IMPS", phone: " | 1 offers" },
  { id: "177", code: "ARS", label: "UPI Payments", phone: " | 9 offers" },
  { id: "17", code: "BRL", phone: " | 4 offers" },
  { id: "17", code: "CHF", phone: " | 4 offers" },
  {
    id: "166",
    code: "CLP",

    phone: " | 1 offers",
  },
  { id: "1876", code: "COP", phone: " | 2 offers" },
  { id: "1t345", code: "DKK", phone: " | 1 offers" },
  { id: "135", code: "ETH", phone: " | 5 offers" },
  {
    id: "135",
    code: "GBP",

    phone: " | 22 offers",
  },
  { id: "142", code: "GEL", phone: " | 1 offers" },
  { id: "gd1", code: "BD", phone: " | 1 offers" },
  { id: "fs1", code: "HUF", phone: " | 1 offers" },
  { id: "sf1", code: "IDR", phone: " | 1 offers" },
  { id: "fsff1", code: "ILS", phone: " | 1 offers" },
  { id: "sfg1", code: "INR", phone: " | 2 offers" },
  { id: "vv1", code: "ISK", phone: " | 1 offers" },
  { id: "vv1", code: "JPY", phone: " | 1 offers" },
  { id: "sf1", code: "KHR", phone: " | 1 offers" },
  { id: "fs1", code: "KRW", phone: " | 1 offers" },
  { id: "fdg1", code: "LTC", phone: " | 1 offers" },
  { id: "dgf1", code: "MXN", phone: " | 3 offers" },
  { id: "WE1", code: "MYR", phone: " | 1 offers" },
  { id: "D1", code: "NGN", phone: " | 1 offers" },
  { id: "sf1", code: "NZD", phone: " | 2 offers" },
  { id: "s1", code: "PLN", phone: " | 1 offers" },
  { id: "ret1", code: "RON", phone: " | 2 offers" },
  { id: "gfb1", code: "SEK", phone: " | 9 offers" },
  { id: "nhn1", code: "UAH", phone: " | 3 offers" },
  { id: "dfs1", code: "USDC", phone: " | 4 offers" },
  { id: "rerr1", code: "USDT", phone: " | 10 offers" },
  { id: "fdf1", code: "XMR", phone: " | 12 offers" },
];

const options2 = [
  {
    id: "11",
    code: "USD",
    label: "All payments methods",
    phone: " | 2 offers",
  },
  {
    id: "12",
    code: "EUR",
    label: "SEPA (EU) bank transfer",
    phone: " | 0 offers",
  },
  { id: "13", code: "RUB", label: "SWIFT", phone: " | 0 offers" },
  { id: "14", code: "CAD", label: "Tether", phone: " | 0 offers" },
  { id: "15", code: "THB", label: "Revolut", phone: " | 0 offers" },
  { id: "16", code: "AUD", label: "Wise", phone: " | 0 offers" },
  { id: "17", code: "CNY", label: "BHIM UPI", phone: " | 1 offers" },
  { id: "18", code: "VES", label: "Google Pay", phone: " | 1 offers" },
  { id: "19", code: "AED", label: "IMPS", phone: " | 2 offers" },
  { id: "188", code: "ARS", label: "UPI Payments", phone: " | 2 offers" },
];

const options3 = [
  { code: "AD", label: "All countries", phone: "3799986" },
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "1-809",
  },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  {
    code: "FR",
    label: "France",
    phone: "33",
    suggested: true,
  },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
  },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "ME", label: "Montenegro", phone: "382" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
  },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russian Federation", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
  },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { code: "SV", label: "El Salvador", phone: "503" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { code: "SZ", label: "Swaziland", phone: "268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { code: "TD", label: "Chad", phone: "235" },
  {
    code: "TF",
    label: "French Southern Territories",
    phone: "262",
  },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
  },
  { code: "TV", label: "Tuvalu", phone: "688" },
  {
    code: "TW",
    label: "Taiwan",
    phone: "886",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
  },
  { code: "VE", label: "Venezuela", phone: "58" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "1-284",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "1-340",
  },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];

const datatable = [
  {
    id: 1,
    name: "chickenwing",
    rate: 100,
    trades: 195,
    price: "70507.19 USD",
    limitscurrency: "2,000 - 150,000 USD",
    limitscrypto: "0.02836590 - 2.12744270 BTC",
    PaymentMethod1: "Binance Coin (BNB)",
    ColorPaymentMethord1: "warning",
    ColorPaymentMethord2: "primary",
    ColorPaymentMethord3: "warning",
    ColorPaymentMethord4: "success",
    ColorPaymentMethord5: "warning",
    ColorPaymentMethordsNo: "warning",
    PaymentMethod2: "Ethereum",
    PaymentMethod3: "DAI",
    PaymentMethod4: "Tether",
    PaymentMethod5: "Binance USD (BUSD)",
    PaymentMethodsNo: "+3",
    offer: "NO KYC‼️Notifications On - 24/7 ✅",
    Location: "Global",
    paymentwindow: 80,
    CryptoCurrencyAddress: "46ZKbR2NAVnjp6zqpbGLuEEKf4xjNYGLvfny2gsCSbznKd3krjHxJAzMBiXJt665iF44NBarc9wDt4YB77os61PJ9qNhKsK",
    BuyCrypto: "0.00583834 XMR",
    Pay: "40,000.01 INR",
    PaymentMethodSelected: "UPI",
    ColorPaymentMethodSelected: "warning",
  },
  //   },{
  //   id:2 ,
  //   name: "alexender",
  //   rate:100 ,
  //   trades:64 ,
  //   price:"69,108.22 USD" ,
  //   limitscurrency: "1,000 - 67,777 USD",
  //   limitscrypto: "0.01447006 - 0.98073710 BTC",
  //   PaymentMethod1: "PayPal",
  //   PaymentMethod2: "Any national bank",
  //   PaymentMethod3: "Google pay",
  //   PaymentMethod4: "Amazon pay",
  //   PaymentMethod5: "Paytm",
  //   PaymentMethodsNo: "+6",
  //   offer: "If I don't respond for more than 2 minutes contact me at tg OTCPlatform where I respond instantly. ",
  // },{
  //   id:3 ,
  //   name: "jajafk",
  //   rate:100 ,
  //   trades: 537,
  //   price:"69,733.75 USD" ,
  //   limitscurrency: "700 - 50,000 USD",
  //   limitscrypto: "0.01003818 - 0.71701294 BTC",
  //   PaymentMethod1: "TRON",
  //   PaymentMethod2: "Cardano",
  //   PaymentMethod3: "Bitcoin Cash",
  //   PaymentMethod4: "Binance Coin (BNB)",
  //   PaymentMethod5: "Dogecoin",
  //   PaymentMethodsNo: "+9",
  //   offer: "XMR ETH SOL USDT USDC and any other coin!!",
  // }, {
  //   id: 4,
  //   name: "chickenwing",
  //   rate: 100,
  //   trades: 195,
  //   price: "70507.19 USD",
  //   limitscurrency: "2,000 - 150,000 USD",
  //   limitscrypto: "0.02836590 - 2.12744270 BTC",
  //   PaymentMethod1: "Binance Coin (BNB)",
  //   PaymentMethod2: "Ethereum",
  //   PaymentMethod3: "DAI",
  //   PaymentMethod4: "Tether",
  //   PaymentMethod5: "Binance USD (BUSD)",
  //   PaymentMethodsNo: "+3",
  //   offer: "NO KYC‼️Notifications On - 24/7 ✅",
  // },{
  // id:5 ,
  // name: "alexender",
  // rate:100 ,
  // trades:64 ,
  // price:"69,108.22 USD" ,
  // limitscurrency: "1,000 - 67,777 USD",
  // limitscrypto: "0.01447006 - 0.98073710 BTC",
  // PaymentMethod1: "PayPal",
  // PaymentMethod2: "Any national bank",
  // PaymentMethod3: "Google pay",
  // PaymentMethod4: "Amazon pay",
  // PaymentMethod5: "Paytm",
  // PaymentMethodsNo: "+6",
  // offer: "If I don't respond for more than 2 minutes contact me at tg OTCPlatform where I respond instantly. ",
  // },{
  // id:6 ,
  // name: "jajafk",
  // rate:100 ,
  // trades: 537,
  // price:"69,733.75 USD" ,
  // limitscurrency: "700 - 50,000 USD",
  // limitscrypto: "0.01003818 - 0.71701294 BTC",
  // PaymentMethod1: "TRON",
  // PaymentMethod2: "Cardano",
  // PaymentMethod3: "Bitcoin Cash",
  // PaymentMethod4: "Binance Coin (BNB)",
  // PaymentMethod5: "Dogecoin",
  // PaymentMethodsNo: "+9",
  // offer: "XMR ETH SOL USDT USDC and any other coin!!",
  // }
];
