
// var a = document.getElementsByTagName("a");

$.ajax({
    url: 'http://localhost:8000/api/url/',
    method: 'POST',
    data: {
        'url_name': 'http://google.com/',
    },
    success: function (response, status) {
        console.log(response);
        console.log(status)
    },
    error: function (response, status) {
        console.log(status)

    }

});




// $('.list-group-item').each(function () {
//             let currentRow = $(this);
//             let currentUrl = currentRow.html();
//             let currentStatus = 0;
//             $.ajax({
//                 url: currentUrl,
//                 type: 'get',
//                 // crossDomain: true,
//                 // dataType: 'jsonp',
//             }).done(function (data, statusText, xhr) {
//                 var status = xhr.status; // 200
//                 currentStatus = xhr.status;
//             }).fail(function (data, textStatus, xhr) {
//                 currentStatus = xhr.status;
//             }).always(function () {
//                 currentRow.addClass(currentStatus === 200 ? 'bg-success' : 'bg-danger');
//                 console.log(currentUrl + ' - ended with status: ' + currentStatus);
//             });
//         });
//
//
//
// // function display() {
// //     let a = document.getElementsByTagName("a");
// //     for (let i = 0; i < a.length; i++){
// //         url = a[i].getAttribute("href");
// //
// //         $.ajax({
// //             url: url,
// //             method: 'GET',
// //             success: function (response, status) {
// //                 console.log(response);
// //                 console.log(status)
// //             },
// //             error: function (status) {
// //                 console.log(status)
// //
// //             }
// //         })
// //     }
// //
// // }
// //
// // display();
//
// // function display() {
// //     for (let i = 0; i < value.length; i++){
// //         console.log(i)
// //     }
// //
// // }
// // display();
// // function display(){
// //     for (let i = 0; i <value.length; i++){
// //         console.log(i);
// //     }
// // }
// //
// // display();
//
// // function display() {
// //     for (let i = 0; i < test.length; i++){
// //         console.log(i);
// //     }
// // }
// //`
// // display();
// // console.log(test);
//
//
// // $.ajax({
// //     url: 'http://localhost:8000/',
// //     method: 'GET',
// //     success: function (response, status) {
// //         console.log(response);
// //         console.log(status);
// //     },
// //     error:function (response, status) {
// //         console.log(status);
// //     }
// // });