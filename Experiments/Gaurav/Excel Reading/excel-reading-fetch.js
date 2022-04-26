"use strict";

fetch("https://opensheet.elk.sh/11c9WJOO80x3nCHA-yDluTbN1-ofJaymPq98VksoJMgU/Form%20Responses%201")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        sampleData = data;
    });

