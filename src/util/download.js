
const download =(canvas, filename)=>{
    let lnk = document.createElement('a'), e;
    lnk.download = filename;
    lnk.href = canvas.toDataURL("image/png;base64");

    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window,
            0, 0, 0, 0, 0, false, false, false,
            false, 0, null);

        lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
};
export default download;