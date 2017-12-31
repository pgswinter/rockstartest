import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errorsInput = {};

  if (data.street === "") {
    errorsInput.street = 'This field is required';
  }
  if (data.city === ""){
    errorsInput.city = 'You have to type infomation for city or both ward and district';
  }
  if(data.ward === ""){
    errorsInput.ward = 'You have to type infomation for city or both ward and district';
  }
  if(data.district === "") {
    errorsInput.district = 'You have to type infomation for city or both ward and district';
  }

  return {
    errorsInput,
    isValidInput: isEmpty(errorsInput)
  }
}