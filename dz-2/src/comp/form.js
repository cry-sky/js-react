import React from 'react';
function Form(props) {
  return(
		<p className="userform"><span>{props.col1}</span><span>{props.col2}</span></p>	
    );
}

function App(prop) {
  return (
    <div>
      <Form  col1="Імя" />
      <Form  col2="Бендер" />
      <Form  col1="Фамілія" />
      <Form  col2="Родріґес" />
      <Form  col1="Рік народження" />
      <Form  col2="2005" />
      <Form  col1="id" />
      <Form  col2="2716057" />
      <Form  col1="Освіта" />
      <Form  col2="Згинач" />
      <Form  col1="Місце роботи" />
      <Form  col2="Кухар компанії 'Міжпланетний експрес'" />
    </div>
  );
}

export default App;