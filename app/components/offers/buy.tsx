"use client";
import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Button from "@mui/joy/Button";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import axios from "axios";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Grid from "@mui/joy/Grid";
import Avatar from "@mui/joy/Avatar";
import Table from "@mui/joy/Table";
import Chip from "@mui/joy/Chip";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Pig from "../pagination";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";

import Tooltip from "@mui/joy/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { visuallyHidden } from "@mui/utils";

// b
interface Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

function labelDisplayedRows({
  from,
  to,
  count,
}: {
  from: number;
  to: number;
  count: number;
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Desser",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <thead>
      <tr>
        <th>
          {/* <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            slotProps={{
              input: {
                "aria-label": "select all desserts",
              },
            }}
            sx={{ verticalAlign: "sub" }}
          /> */}
        </th>
        {/* {headCells.map((headCell) => { */}
          {/* const active = orderBy === headCell.id; */}
         {const active = orderBy ===nabme;
          return (
            <th
              // key={headCell.id}
              key="Desser"
              aria-sort={
                active
                  ? ({ asc: "ascending", desc: "descending" } as const)[order]
                  : undefined
              }
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link
                underline="none"
                color="neutral"
                textColor={active ? "primary.plainColor" : undefined}
                component="button"
                // onClick={createSortHandler(headCell.id)}
                onClick={createSortHandler(name)}
                fontWeight="lg"
                startDecorator={
                  headCell.numeric ? (
                    <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
                  ) : null
                }
                endDecorator={
                  !headCell.numeric ? (
                    <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
                  ) : null
                }
                sx={{
                  "& svg": {
                    transition: "0.2s",
                    transform:
                      active && order === "desc"
                        ? "rotate(0deg)"
                        : "rotate(180deg)",
                  },
                  "&:hover": { "& svg": { opacity: 1 } },
                }}
              >
                {headCell.label}
                {active ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </Link>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     alignItems: "center",
    //     py: 1,
    //     pl: { sm: 2 },
    //     pr: { xs: 1, sm: 1 },
    //     ...(numSelected > 0 && {
    //       bgcolor: "background.level1",
    //     }),
    //     borderTopLeftRadius: "var(--unstable_actionRadius)",
    //     borderTopRightRadius: "var(--unstable_actionRadius)",
    //   }}
    // >
    //   {numSelected > 0 ? (
    //     <Typography sx={{ flex: "1 1 100%" }} component="div">
    //       {numSelected} selected
    //     </Typography>
    //   ) : (
    //     <Typography
    //       level="body-lg"
    //       sx={{ flex: "1 1 100%" }}
    //       id="tableTitle"
    //       component="div"
    //     >
    //        Nutrition
    //     </Typography>
    //   )}

    //   {numSelected > 0 ? (
    //     <Tooltip title="Delete">
    //       <IconButton size="sm" color="danger" variant="solid">
    //         <DeleteIcon />
    //       </IconButton>
    //     </Tooltip>
    //   ) : (
    //     <Tooltip title="Filter list">
    //       <IconButton size="sm" variant="outlined" color="neutral">
    //         <FilterListIcon />
    //       </IconButton>
    //     </Tooltip>
    //   )}
    // </Box>
    <></>
  );
}
// b

export default function C() {
  // c
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("calories");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any, newValue: number | null) => {
    setRowsPerPage(parseInt(newValue!.toString(), 10));
    setPage(0);
  };

  const getLabelDisplayedRowsTo = () => {
    if (rows.length === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1
      ? rows.length
      : Math.min(rows.length, (page + 1) * rowsPerPage);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  // c

  const [currency, setCurrency] = React.useState("inr");
  // const [selected, setSelected] = React.useState("");
  const [selected0, setSelected0] = React.useState("");
  return (
    <>
      <Box sx={{ m: 10 }}>
        <Typography level="h1">BUY BITCOIN</Typography>

        <Typography level="body-lg">
          Buy Bitcoin from other users using any payment method and currency{" "}
          <Link sx={{ m: 5 }} href="#basics">
            How to start?{" "}
          </Link>
          <Button size="sm">Create offer</Button>
        </Typography>
        <Sheet
          variant="soft"
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
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={1.5}>
              <Select defaultValue="sfg1">
                {options.map((option) => {
                  return (
                    <Option value={option.id}>
                      {" "}
                      <Typography level="title-md">
                        {option.code}

                        <Typography level="body-md" sx={{ fontSize: "xl" }}>
                          {option.phone}
                        </Typography>
                      </Typography>
                    </Option>
                  );
                })}
              </Select>
            </Grid>
            <Grid xs={2}>
              <Stack spacing={1.5}>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
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
            <Grid xs={2}>
              <Select defaultValue="1">
                <Option value="1">All payments types </Option>
                <Option value="2"> ATM withdrawal</Option>
                <Option value="3"> Bank wire</Option>
                <Option value="4"> Cash</Option>
                <Option value="5"> Cryptocurrency</Option>
                <Option value="6">Online payment system </Option>
              </Select>
            </Grid>

            <Grid xs={2.5}>
              <Select defaultValue="11">
                {options2.map((option) => {
                  return (
                    <Option value={option.id}>
                      <Typography level="title-md">
                        {option.label}

                        <Typography level="body-md" sx={{ fontSize: "xl" }}>
                          {option.phone}
                        </Typography>
                      </Typography>
                    </Option>
                  );
                })}
              </Select>
            </Grid>
            <Grid xs={2.3}>
              <Select defaultValue="3799986">
                {options3.map((option) => {
                  return (
                    <Option value={option.phone}>
                      <Typography level="title-md">{option.label}</Typography>
                    </Option>
                  );
                })}
              </Select>
            </Grid>
            <Grid xs={1.5}>
              <Select defaultValue="1">
                <Option value="1">Clear all </Option>
              </Select>
            </Grid>
          </Grid>

          {/*  */}
          <EnhancedTableToolbar numSelected={selected.length} />
          <Table
            aria-labelledby="tableTitle"
            hoverRow
            sx={{
              "--TableCell-headBackground": "transparent",
              "--TableCell-selectedBackground": (theme) =>
                theme.vars.palette.success.softBg,
              "& thead th:nth-child(1)": {
                width: "40px",
              },
              "& thead th:nth-child(2)": {
                width: "30%",
              },
              "& tr > *:nth-child(n+3)": { textAlign: "right" },
            }}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <tbody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <tr
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      // selected={isItemSelected}
                      style={
                        isItemSelected
                          ? ({
                              "--TableCell-dataBackground":
                                "var(--TableCell-selectedBackground)",
                              "--TableCell-headBackground":
                                "var(--TableCell-selectedBackground)",
                            } as React.CSSProperties)
                          : {}
                      }
                    >
                      <th scope="row">
                        <Checkbox
                          checked={isItemSelected}
                          slotProps={{
                            input: {
                              "aria-labelledby": labelId,
                            },
                          }}
                          sx={{ verticalAlign: "top" }}
                        />
                      </th>
                      <th id={labelId} scope="row">
                        {row.name}
                      </th>
                      <td>{row.calories}</td>
                      <td>{row.fat}</td>
                      <td>{row.carbs}</td>
                      <td>{row.protein}</td>
                    </tr>
                  );
                })}
              {emptyRows > 0 && (
                <tr
                  style={
                    {
                      height: `calc(${emptyRows} * 40px)`,
                      "--TableRow-hoverBackground": "transparent",
                    } as React.CSSProperties
                  }
                >
                  <td colSpan={6} aria-hidden />
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      justifyContent: "flex-end",
                    }}
                  >
                    <FormControl orientation="horizontal" size="sm">
                      <FormLabel>Rows per page:</FormLabel>
                      <Select
                        onChange={handleChangeRowsPerPage}
                        value={rowsPerPage}
                      >
                        <Option value={5}>5</Option>
                        <Option value={10}>10</Option>
                        <Option value={25}>25</Option>
                      </Select>
                    </FormControl>
                    <Typography textAlign="center" sx={{ minWidth: 80 }}>
                      {labelDisplayedRows({
                        from: rows.length === 0 ? 0 : page * rowsPerPage + 1,
                        to: getLabelDisplayedRowsTo(),
                        count: rows.length === -1 ? -1 : rows.length,
                      })}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <IconButton
                        size="sm"
                        color="neutral"
                        variant="outlined"
                        disabled={page === 0}
                        onClick={() => handleChangePage(page - 1)}
                        sx={{ bgcolor: "background.surface" }}
                      >
                        <KeyboardArrowLeftIcon />
                      </IconButton>
                      <IconButton
                        size="sm"
                        color="neutral"
                        variant="outlined"
                        disabled={
                          rows.length !== -1
                            ? page >= Math.ceil(rows.length / rowsPerPage) - 1
                            : false
                        }
                        onClick={() => handleChangePage(page + 1)}
                        sx={{ bgcolor: "background.surface" }}
                      >
                        <KeyboardArrowRightIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </td>
              </tr>
            </tfoot>
          </Table>
          {/*  */}
          <Table hoverRow>
            <thead>
              <tr>
                <th>Seller</th>
                <th>Price</th>
                <th>Limits</th>
                <th
                // style={{ width: '40%' }}
                >
                  Payments methods
                </th>
                <th>Offer details</th>
              </tr>
            </thead>
            {/* </Table>
      <Table
      aria-label="table with ellipsis texts"
      noWrap
      sx={{ mx: 'auto', width: 400 }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th style={{ width: '10%' }}>
           hi
          </th>
        </tr>
      </thead> */}
            <tbody>
              <tr>
                <td>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Avatar src="/static/images/avatar/1.jpg" />
                    <Box sx={{ minWidth: 0 }}>
                      {/* <Typography noWrap fontWeight="lg" level="title-lg"> */}
                      <Typography sx={{ fontSize: 23 }} level="title-sm" noWrap>
                        chickenwing
                      </Typography>
                      {/* <Typography noWrap level="body-sm"> */}
                      <Typography level="body-sm" noWrap>
                        100% rate, 195 trades
                      </Typography>
                    </Box>
                  </Box>
                </td>
                <td>
                  {" "}
                  <Typography sx={{ fontSize: 28 }} level="title-md">
                    70,507. 19 USD
                  </Typography>
                </td>
                <td>
                  <Typography sx={{ fontSize: 23 }} level="title-sm">
                    {" "}
                    2,000 - 150,000 USD{" "}
                  </Typography>
                  {"\n"}
                  <Typography level="body-md">
                    0.02836590 - 2.12744270 BTC
                  </Typography>
                </td>
                <td>
                  <Box
                    sx={{
                      display: "flex",
                      mt: 2,
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <RadioGroup
                        name="best-movie"
                        aria-labelledby="best-movie"
                        orientation="horizontal"
                        sx={{ flexWrap: "wrap", gap: 1 }}
                      >
                        {[
                          "Binance Coin (BNB)",
                          "Ethereum",
                          "DAI",
                          "Tether",
                          "Binance USD (BUSD)",
                          "+3",
                        ].map((name) => {
                          const checked = selected0 === name;
                          return (
                            <Chip
                              style={{ size: "1rem" }}
                              key={name}
                              variant="plain"
                              color={checked ? "primary" : "neutral"}
                              // startDecorator={
                              //   checked && <CheckIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />
                              // }
                            >
                              <Radio
                                variant="outlined"
                                color={checked ? "primary" : "neutral"}
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
                </td>
                <td>
                  {" "}
                  <Typography level="body-md">
                    {" "}
                    NO KYC‼️Notifications On - 24/7 ✅{" "}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Avatar src="icon.svg" />
                    <Box sx={{ minWidth: 0 }}>
                      <Typography noWrap fontWeight="lg">
                        Morty D Ardiousdellois Addami
                      </Typography>
                      <Typography noWrap level="body-sm">
                        Writer, Youtuber
                      </Typography>
                    </Box>
                  </Box>
                </td>
                <td>70,597 USD</td>
                <td>70,597 USD</td>
                <td>70,597 USD</td>
                <td>70,597 USD</td>
              </tr>
              <tr>
                <td>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Avatar src="/static/images/avatar/1.jpg" />
                    <Box sx={{ minWidth: 0 }}>
                      <Typography noWrap fontWeight="lg">
                        Morty D Ardiousdellois Addami
                      </Typography>
                      <Typography noWrap level="body-sm">
                        Writer, Youtuber
                      </Typography>
                    </Box>
                  </Box>
                </td>
                <td>70,597 USD</td>
                <td>70,597 USD</td>
                <td>70,597 USD</td>
                <td>70,597 USD</td>
              </tr>
            </tbody>
          </Table>
          <Pig />
        </Sheet>
      </Box>
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