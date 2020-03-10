import React from 'react';

class Content extends React.Component{
  render(){
    return(
       <TR />
      );
  }
}
class TR extends React.Component {
 render(){
  const items=[]
    for(const[index,value] of data.entries()){
    items.push(<TD tdN={data[index].type} tdY={data[index].value} />)
}
 return(
  <tbody>
  {items}
  </tbody>
 )
}
}
class TD extends React.Component{
  render(){
  return (
    <tr>
      <td style={{border: "solid 1px silver",paddind:"3px"}}>{this.props.tdN}</td>
      <td style={{border: "solid 1px silver",paddind:"3px"}}>{this.props.tdY}</td>
    </tr>
    )
}
}
export default Content;
const data=[
{ type:'Країна', value:'Україна' },
{ type:'Регіон', value:'Хмельницька область' },
{ type:'Рада', value:'Хмельницька міська рада' },
{ type:'Код КОАТУУ', value:'6810100000' },
{ type:'Засноване', value:'1431' },
{ type:'Магдебурзьке право', value:'1566' },
{ type:'Статус міста', value:'з 1566 року' },
{ type:'Поділ міста', value:'Центр, Виставка, Озерна, Південно-Західний мікрорайон, Ракове, Дубове, Книжківці, Гречани, Ружична, Лезневе' },
{ type:'Площа', value:'90,2 км²' },
{ type:'Густота населення', value:'3007 осіб/км²' },
{ type:'Поштові індекси', value:'29000-499 (29000 (Центр), 29006 (Ракове), 29009 (Дубове), 29025 (Гречани), 29027 (Озерна))' },
{ type:'Координати', value:'49°25′10″ пн. ш. 26°58′46″ сх. д.' },
{ type:'Висота над рівнем моря', value:'295 м' },
{ type:'Водойма', value:'Південний Буг, Плоска, Кудрянка' },
{ type:'Назва мешканців', value:'хмельничани, хмельничанин, хмельничанка' },
{ type:'День міста', value:'Останні вихідні вересня' },
{ type:'Номери автомобілів', value:'ТЯ, ХМ, ХІ, ВХ, НХ' },
];
