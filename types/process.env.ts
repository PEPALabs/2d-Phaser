// define the Node "process" object. If it is defined (@types/node) by another module you installed,
// then you can delete this file
// declare const process: {
//     env: {
//         NODE_ENV: string
//     }
// }
process.env.NODE_ENV = 'development';
process.env.PUBLIC_URL = 'localhost:8080/';