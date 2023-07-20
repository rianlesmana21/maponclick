var bandungmap = document.getElementById("bandung-map"),
    bandungInfo = document.getElementById("kecamatanInfo"),
    allKecamatan = bandungmap.querySelectorAll("g");
bandungmap.addEventListener("click", function (e) {
    var province = e.target.parentNode;
    if (e.target.nodeName == "path") {
        for (var i = 0; i < allKecamatan.length; i++) {
            allKecamatan[i].classList.remove("active");
        }
        province.classList.add("active");
        var provinceName = province.querySelector("title").innerHTML,
            provincePara = province.querySelector("desc p");
        sourceImg = province.querySelector("img"),
            bandungInfo.innerHTML = "";
        bandungInfo.insertAdjacentHTML("afterbegin", "<img src=" + sourceImg.getAttribute('xlink:href') + " alt='" + sourceImg.getAttribute('alt') + "'><h1>" + provinceName + "</h1><p>" + provincePara.innerHTML + "</p>");
        bandungInfo.classList.add("show");
    }
})
