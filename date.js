function xulydate(){
    let message = document.getElementById("result");
    let inputthang = document.getElementById("inputthang").value
    console.log(inputthang)
    switch (Number(inputthang)) {
        case 1:
            message.innerText="Tháng 1 có 31 ngày"
            break;
        case 2:
            message.innerText="Tháng 2 có 29 ngày"
            break;
        case 3:
            message.innerText="Tháng 3 có 31 ngày"
            break;
        case 4:
            message.innerText="Tháng 4 có 30 ngày"
            break;
        case 5:
            message.innerText="Tháng 5 có 31 ngày"
            break;
        case 6:
            message.innerText="Tháng 6 có 30 ngày"
            break;
        case 7:
            message.innerText="Tháng 7 có 31 ngày"
            break;
        case 8:
            message.innerText="Tháng 8 có 31 ngày"
            break;
        case 9:
            message.innerText="Tháng 9 có 30 ngày"
            break;
        case 10:
            message.innerText="Tháng 10 có 31 ngày"
            break;
        case 11:
            message.innerText="Tháng 11 có 30 ngày"
            break;
        case 12:
            message.innerText="Tháng 12 có 31 ngày"
            break;
        default:
            message.innerText="Tháng không đúng"
            break;
    }
}