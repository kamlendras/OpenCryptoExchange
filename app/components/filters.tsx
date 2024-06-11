import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import ModalClose from '@mui/joy/ModalClose';
import Stack from '@mui/joy/Stack';
import FilterAltOutlined from '@mui/icons-material/FilterAltOutlined';
import CountrySelector from './CountrySelector';
import OrderSelector from './OrderSelector';
import CheckIcon from '@mui/icons-material/Check';
import Checkbox from '@mui/joy/Checkbox';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
function valueText(value: number) {
  return `$${value.toLocaleString('en-US')}`;
}

export default function Filters() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string[]>([]);
  return (
    <Stack
      useFlexGap
      direction="row"
      spacing={{ xs: 0, sm: 2 }}
      justifyContent={{ xs: 'space-between' }}
      flexWrap="wrap"
      sx={{ minWidth: 0 }}
    >
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<FilterAltOutlined />}
        onClick={() => setOpen(true)}
      >
        Filters
      </Button>
      <OrderSelector />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Stack useFlexGap spacing={3} sx={{ p: 2 }}>
          <DialogTitle>Filters</DialogTitle>
          <ModalClose />
          <CountrySelector />

          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <div>
        <Typography level="title-lg" id="fav-movie" mb={2}>
          Topics
        </Typography>
        <Box
          role="group"
          aria-labelledby="fav-movie"
          sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
        >
          {[
            'Tor',
            'Monero',
            'S',
            'Eternals',
            'Shang chi',
            'Jungle cruise',
            'No time to die',
            'Thor',
            'The hulk',
          ].map((name) => {
            const checked = selected.includes(name);
            return (
              <Chip
                key={name}
                variant="plain"
                color={checked ? 'primary' : 'neutral'}
                startDecorator={
                  checked && <CheckIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />
                }
              >
                <Checkbox
                  variant="outlined"
                  color={checked ? 'primary' : 'neutral'}
                  disableIcon
                  overlay
                  label={name}
                  checked={checked}
                  onChange={(event) => {
                    setSelected((names) =>
                      !event.target.checked
                        ? names.filter((n) => n !== name)
                        : [...names, name],
                    );
                  }}
                />
              </Chip>
            );
          })}
        </Box>
      </div>
    </Box>



          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              gridTemplateRows: 'auto auto',
              gap: 1,
            }}
          >
            <FormLabel htmlFor="filters-start-date">Start date</FormLabel>
            <div />
            <FormLabel htmlFor="filters-end-date">End date</FormLabel>

            <Input
              id="filters-start-date"
              type="date"
              placeholder="Jan 6 - Jan 13"
              aria-label="Date"
            />
            <Box sx={{ alignSelf: 'center' }}>-</Box>
            <Input
              id="filters-end-date"
              type="date"
              placeholder="Jan 6 - Jan 13"
              aria-label="Date"
            />
          </Box>
 
           
        </Stack>
      </Drawer>
    </Stack>
  );
}
