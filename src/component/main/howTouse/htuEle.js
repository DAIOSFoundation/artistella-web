import styled from "styled-components"



const Div =styled.div`
width: 100%;
height: 100%;
border-radius: 6px;
box-shadow: 2px 2px 20px 0 rgba(195, 179, 160, 0.62);
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const UseNumber=styled.div`
font-weight:bold;
font-size:46px;
text-align:center;
color: #fbac00;
margin-bottom: 10px;
`

const UseGridTitle=styled.div`
font-size:18px;
font-weight:bold;
text-align:center;
margin-bottom:6px;
`

const UseSummary=styled.div`
width: 80%;
line-height: 1.57;
font-size:14px;
text-align:center;
color:#737170;
`






function UseEle({number,title,summary}){
    return(
      <Div>
            <UseNumber>{number}</UseNumber>
            <UseGridTitle>{title}</UseGridTitle>
            <UseSummary>{summary}</UseSummary>
      </Div>
    )
  }


export default UseEle;