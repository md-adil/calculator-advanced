const output = document.getElementById("output");
let isOn = false;
function handleClick(e) {
    const out = document.getElementById("output");
    const val = e.target.value;
    if (val === "ON") {
        e.target.value = "OFF";
        e.target.innerText = "OFF";
        output.value = "0";
        isOn = true;
        return;
    }
    if (val === "OFF") {
        e.target.value = "ON";
        e.target.innerText = "ON";
        isOn = false;
        output.value = "";
        return;
    }

    if (!isOn) {
        return;
    }
    switch (val) {
        case "<-":
            handleBack();
            break;
        case "=":
            handleOperation();
            break;
        case "CE":
            output.value = "0";
            break;
        default:
            if (out.value === "0") {
                output.value = "";
            }
            out.value = out.value + val;
    }
}

function handleBack() {
    const val = output.value;
    output.value = output.value.substring(0, val.length - 1);
}
function handleOperation() {
    out.value = eval(out.value);
}

const symbols = ["+", "-", "*", "/", "%", "<-", "="];

function addButtons(items) {
    const np = document.getElementById("numpad");
    for (const num of items) {
        const btn = document.createElement("button");
        btn.innerText = num;
        btn.className = "p-4 rounded-full m-1 bg-gray-600 border border-solid border-200 hover:bg-gray-700";
        if (num == "CE") {
            btn.classList.add("col-span-3");
        }
        np.appendChild(btn);
        btn.value = num;
        btn.addEventListener("click", handleClick);
    }
}

function numpads() {
    addButtons(["ON", "CE"]);
    addButtons([...new Array(10).keys()].reverse());
    addButtons(symbols);
}

function main() {
    numpads();
}

main();
