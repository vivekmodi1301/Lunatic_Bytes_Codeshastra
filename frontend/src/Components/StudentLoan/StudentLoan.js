import React, { useState } from "react";
import styled from "styled-components";
//
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
// import { Slider } from '@mui/material';
//import {Table} from 'react-bootstrap';


function StudentLoan(props) {
  const [tenure, setTenure] = useState(null);
  const [amount, setAmount] = useState(null);
  const [roi, setRoi] = useState(null);
  const [emi, setEmi] = useState(null);
  const [interestamount, setInterestamount] = useState(null);
  const [showAddLoan, setShowAddLoan] = useState(true)
  const [showViewLoan, setShowViewLoan] = useState(false)
  const [showStrat, setShowStrat] = useState(false)

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
      <FormStyled>

    
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
          <h3>Final Amount (Principal + Interest) to be paid: {interestamount} </h3>
        </div>
      
      
      </FormStyled>
    </>
  );
}

const LoanStyled = styled.form`
  padding: 2rem 2rem;
  flex-direction: column;
  justify-content: center;
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

const FormStyled = styled.form`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }

    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;

export default StudentLoan;