import React, { useState } from "react";
import styled from "styled-components";
//
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
// import { Slider } from '@mui/material';
//import {Table} from 'react-bootstrap';
import Table from "react-bootstrap/Table";


function StudentLoan(props) {
  const [tenure, setTenure] = useState(null);
  const [amount, setAmount] = useState(null);
  const [roi, setRoi] = useState(null);
  const [emi, setEmi] = useState(null);
  const [interestamount, setInterestamount] = useState(null);

  const changeTenure = (event) => {
    setTenure(event.target.value);
  };

  const changeAmount = (event) => {
    setAmount(event.target.value);
  };

  const changeRoi = (event) => {
    setRoi(event.target.value);
  };

  const changeEmi = (event) => {
    setEmi(event.target.value);
  };

  const changeInterestamount = (event) => {
    setInterestamount(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      tenure,
      amount,
      roi,
      emi,
      interestamount
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setTenure('');
    setAmount('');
    setRoi('');
    setEmi('');
    setInterestamount('');
  };



  const handleEMI = (e) => {
    e.preventDefault();
    let calIntamount = amount * Math.pow(1 + roi / 100, tenure);
    let calEmi = calIntamount / (12 * 5);
    setEmi(Math.round(calEmi * 100) / 100);
    setInterestamount(Math.round(calIntamount * 100) / 100);
  };

  const handleLoan = (e) => {
    e.preventDefault();
    console.log(tenure);
    console.log(amount);
    console.log(roi);
  };

  return (
    <>
      <LoanStyled>
        {" "}
        <div className="input-control">
          <input
            type="text"
            name={tenure}
            placeholder="Loan Tenure"
            onChange={(e) => {
              setTenure(e.target.value);
            }}
          />
        </div>

        <div className="input-control">
          <input
            type="text"
            name={amount}
            placeholder="Loan amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>

        <div className="input-control">
          <input
            type="text"
            name={roi}
            placeholder="Rate of Interest"
            onChange={(e) => {
              setRoi(e.target.value);
            }}
          />
        </div>

        <div className="submit-btn">
          <Button
            name={"Add Loan"}
            bPad={".8rem 1.6rem"}
            bRad={"20px"}
            bg={"var(--color-accent"}
            color={"#fff"}
            onClick={handleLoan}
          />
        </div>

        <div className="submit-btn">
          <Button
            name={"Calculate EMI"}
            bPad={".8rem 1.6rem"}
            bRad={"20px"}
            bg={"var(--color-accent"}
            color={"#fff"}
            onClick={handleEMI}
          />
        </div>

        <div className="input-control">
          <h3>EMI to be paid monthly : {emi} </h3>
          <h3>Amount to be paid: {interestamount} </h3>
        </div>
      </LoanStyled>

      <Tablecomp>
        <Table striped border hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Tenure</th>
              <th>Loan Amount</th>
              <th>RoI</th>
              <th>EMI</th>
              <th>Final Amount</th>
            </tr>
          </thead>
          <tbody>
            <td>#</td>
            <td>
            <Button onClick={(handleLoan) => {
                this.tenure();
                this.setTenure({ name: tenure});
            }}>
                </Button>
            </td>
            {/* <td>{tenure}</td> */}
            <td>{amount}</td>
            <td>{roi}</td>
            <td>2</td>
            <td>2</td>
            {/* <td>{tenure}</td> */}
            {/* <td>{amount}</td>
                <td>{roi}</td>
                <td>{emi}</td>
                <td>{interestamount}</td> */}
          </tbody>
        </Table>
      </Tablecomp>

      <div className="submit-btn">
        <Button
          name={"Generate Strategies"}
          bPad={".8rem 1.6rem"}
          bRad={"20px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </>
  );
}

const LoanStyled = styled.form`
  padding: 2rem 2rem;
  flex-direction: column;
  gap: 2rem;
`;

const Tablecomp = styled.table`
  Table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
  }
`;

export default StudentLoan;
