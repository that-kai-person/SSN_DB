let csvData = [];

fetch("storage.csv")
.then(response => response.text())
.then(text => {

    csvData = text.trim().split("\n");

})
.catch(() => {

    document.getElementById("result").textContent =
        "Couldn't load storage.csv";

});

function searchSerial(){

    const input =
        document.getElementById("serial")
        .value
        .trim()
        .toUpperCase();

    if(input===""){
        return;
    }

    for(let i=1;i<csvData.length;i++){

        const columns =
            csvData[i]
            .split(",")
            .map(x=>x.trim().toUpperCase());

        if(columns.includes(input)){

            document.getElementById("result").textContent =
                "Storage Cell: " + i;

            return;
        }

    }

    document.getElementById("result").textContent =
        "Serial number not found.";

}

document
.getElementById("searchButton")
.addEventListener("click",searchSerial);

document
.getElementById("serial")
.addEventListener("keydown",function(e){

    if(e.key==="Enter"){
        searchSerial();
    }

});