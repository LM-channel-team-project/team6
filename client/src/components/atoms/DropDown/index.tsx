import React from 'react';
import * as S from './style';

interface Data {
  content: string;
  color: string;
}
interface Props {
  texts: Data[];
}

export default function DropDown({ texts }: Props): JSX.Element {
  return (
    <S.Container>
      <S.TriangleBlock />
      <S.DropDown>
        {texts.map((text) => (
          <S.DropDownContent color={text.color}>
            {text.content}
          </S.DropDownContent>
        ))}
      </S.DropDown>
    </S.Container>
  );
}

// <!DOCTYPE html>
// <html>
// <style>
// .DropDown{
// border: 5px solid black;
//   width: 100px;
//   height: 64px;
//  background-color: black;
//   // color: #fff;
//   background-color: white;
//   // text-align: center;
//   border-radius: 10px;
//   // padding: 5px 0;

//   // margin-left: -60px;

// }
// .Container::before{

//   content: "";
//   display:absolute;
// 	margin-top: 10px;
// 	//margin-left: 10px;
//   border-width: 20px;
//   border-style: solid;
//   border-color:  transparent transparent black transparent;

// }
// .Container{
// display: inline-block;
// border: 5px solid red;
// }
// .text{

//     border-bottom: 0.5px solid rgba(0, 0, 0, 0.09);
// 	border: 1px solid red;
//   font-weight: 700;
// }
// .TriangleDiv{

//   height: 20px;

// }
// </style>
// <body style="text-align:center;">

// <div class="Container">
// <div class="TriangleDiv"></div>
// <div class="DropDown">

// <div class="text">마이페이지</div>
// <div class="text">로그아웃</div>
// </div>
// </div>

// </body>
// </html>
