import React from 'react';


export default class Footers extends React.Component{
  render(){
    return(
    <div className="badge">
        <h1>Iteration Object using React</h1>
        <span>{this.props.footertext}</span>
        <ul>
            {this.props.biodatas.map((data, i) => {
                return <li data={data} key={i}>
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.color}</p>
                </li>
            })
            }
        </ul>
    </div>
    )
  }
}
