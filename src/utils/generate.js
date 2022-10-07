const pattern = "1234567890QWERTYUIOPASDFGHJKLÇZXCVBNMqwertyuiopasdfghjklçzxcvbnm_";

function generate(size) {
    let id = "";
    let chars = pattern.split("");

    for(let i = 0; i < (size - 1); i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }

    id += Math.floor(Math.random() * 9)
    return id;
}

module.exports = generate;