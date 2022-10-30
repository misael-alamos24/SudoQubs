export default function ChangeColor(squares){
    
    for(let gamma= 0; gamma<squares.length; gamma++){

        // console.log(squares[gamma][0])
        // console.log(squares[gamma][1])
        document.getElementsByTagName('input')[squares[gamma]].style.color= 'red'


    }

}