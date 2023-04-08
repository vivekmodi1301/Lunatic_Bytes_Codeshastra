import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'

const auth  = getAuth()
class firebaseMethods {
     signup(data){
        return createUserWithEmailAndPassword(auth,data.email,data.password)
    }
     login(auth,email, password){
        return signInWithEmailAndPassword(auth,email,password)
    }
     logout(){
        return signOut();
    }
     resetPassword(auth,email) {
        return sendPasswordResetEmail(auth,email)
    }   
}

export default new firebaseMethods();

