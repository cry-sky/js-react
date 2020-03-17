import React from 'react';

  class Form2 extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                  name: 'Бендер',
                  surname:'Родріґес',
                  year:'2005',
                  id:'2716057',
                  education:'Згинач',
                  work:'Кухар компанії "Міжпланетний експрес"'};
                this.Change=this.Change.bind(this);
                this.handleSubmit=this.handleSubmit.bind(this);
                this.baseState = this.state;
            }
            
            Change(event){
              const target = event.target;
              const value = target.name === 'name' ?  target.value: null;
              const value2 = target.name === 'surname' ?  target.value: null;
              const value3 = target.name === 'year' ?  target.value: null;
              const value4 = target.name === 'id' ?  target.value: null;
              const value5 = target.name === 'education' ?  target.value: null;
              const value6 = target.name === 'work' ?  target.value: null;

              const name = target.name;
              this.setState({
                 [name]: value
              });
            }
            handleSubmit(e){
              e.preventDefault()
            }
            resetForm = () => { 
            console.log('1');
            this.setState(this.baseState) 
          }
            render() {
                return (
                  <form className="form-style" onSubmit={this.handleSubmit}>
                      <label>
                        <span>Імя</span>
                        <input name="name" type="text" value={this.state.name} onChange={this.Change} />
                      </label>
                      <label>
                        <span>Фамілія</span>
                       <input name="surname" type="text" value={this.state.surname} onChange={this.Change} />
                      </label>
                      <label>
                        <span>рік народження</span>
                        <input name="year" type="text" value={this.state.year} onChange={this.Change} />
                      </label>
                      <label>
                        <span>ID</span>
                        <input name="id" type="text" value={this.state.id} onChange={this.Change} />
                      </label>
                      <label>
                        <span>Освіта</span>
                        <input name="education" type="text" value={this.state.education} onChange={this.Change} />
                      </label>
                      <label>
                        <span>Професія</span>
                        <input name="work" type="text" value={this.state.work} onChange={this.Change} />
                      </label>
                    <button onClick={this.resetForm}>Reset</button>
                 </form>
                )
            }
        }
export default Form2;