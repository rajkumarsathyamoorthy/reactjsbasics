import React from 'react';


export default class Footers extends React.Component{
  render(){
    return(
    <div className="badge">
        <span>{this.props.footertext}</span>
        <ul>
            {this.props.biodatas.map((data) => {
                return <li data={data} key={data.age}>
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
