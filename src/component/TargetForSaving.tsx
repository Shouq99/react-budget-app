import React, {ChangeEvent, FormEvent, useEffect, useState } from "react";
import {SubmitHandler, useForm } from "react-hook-form";
type TargetInput={
  target : number 
 }

export const TargetForSaving = (props: {savingAmount: number}) => {
  const [target, setTarget] = useState(0);
  const [currentSaving, setCurrentSaving] = useState(0);
   const {
     register,
     handleSubmit,
     watch,
     formState: { errors },
   } = useForm <TargetInput>();

  useEffect(
    () => setCurrentSaving(props.savingAmount),
    [props.savingAmount]
  );


  const onSubmit : SubmitHandler<TargetInput> = (data) =>{
    console.log (data)
    setTarget(data.target);
  }

    return (


      <div className='form-field'>
            <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="target">Set target</label>
        <input
          type="number"
          id="target"
          {...register("target", {
            required: "enter the target ",
            min: { value: 0, message: "you cant enter negative target" },
          })}
        />
           {errors.target && <p>{errors.target.message}</p>}

           <button type="submit">Reset</button>

        </form>
        <p>Target : {target}</p>
        <label>progress : {((currentSaving / target) * 100) | 0} %</label>
        <p>Current Saving: {currentSaving}</p>
        <p>
        <progress max={target} value={currentSaving} />         
         </p>
        </div>

    );


};

export default TargetForSaving;