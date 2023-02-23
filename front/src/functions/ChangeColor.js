export default function ChangeColor(squares){

    for(let gamma= 0; gamma<squares.length; gamma++){

        document.getElementsByTagName('input')[squares[gamma]].style.color= 'red'

    }

};