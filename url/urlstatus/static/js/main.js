function links(){
    var a = document.getElementsByTagName("a");

    for(let i=0; i<a.length; i++){
        link_element = a[i];
        link = a[i].getAttribute("href");

        url_status(link, link_element)

    }
}

function url_status(link_f, elem) {
    $.ajax({
        url: 'http://localhost:8000/api/url/',
        method: 'post',
        data: {
            'url_name': link_f,
        },
       success: function (response, status) {
            console.log(response['url_status']);
              if (response['url_status'] == 'success_url_code'){
             elem.style.backgroundColor='green'
        }
            console.log(response);
            console.log(status);
        },
        error: function (response, status) {
            console.log(response['url_status']);
            if (response['url_status'] == 'error_code'){
                elem.style.backgroundColor='red'
            }
            console.log(status)
        }

    });
}

$(document).ready(function () {
    links();
});