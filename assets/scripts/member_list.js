// © 2022 REVATI

function build_member_lists() {
    // TODO: Complete the  member list
    let path = location.href.replace("index.html", "") + "assets/data/member_list.json";
    fetch(path)
        .then(response => response.json())
        .then(data => {
            build_member_list(document.getElementById("fortnite-member-list"), data.fortnite);
            build_member_list(document.getElementById("apex-member-list"), data.apex);
            build_member_list(document.getElementById("minecraft-member-list"), data.minecraft);
        })
        .catch(_ => {
            // for local environment
            fetch("https://sarf-esports.github.io/website/assets/data/member_list.json")
                .then(response => response.json())
                .then(data => {
                    build_member_list(document.getElementById("fortnite-member-list"), data.fortnite);
                    build_member_list(document.getElementById("apex-member-list"), data.apex);
                    build_member_list(document.getElementById("minecraft-member-list"), data.minecraft);
                });
        });
}

function build_member_list(elm, member_list) {
    member_list.forEach((m) => {
        let icon_img = m.icon == null ? "noimage.png" : m.icon;
        let icon = `<img src="./assets/images/members/${icon_img}" alt="member icon" loading="lazy">`;
        let name = `<h3>${m.name}</h2>`;
        let twitter = m.twitter == null ? "" : `
            <a href="https://twitter.com/${m.twitter}" class="member-twitter member-link" target="_blank">
            <img src="./assets/images/logos/twitter-logo-01282021/Twitter logo/SVG/Logo blue.svg" alt="twitter logo" loading="lazy">
            </a>
        `;
        let youtube = m.youtube == null ? "" : `
            <a href="https://youtube.com/channel/${m.youtube}" class="member-youtube member-link" target="_blank">
            <img src="./assets/images/logos/youtube.png" alt="youtube logo" loading="lazy">
            </a>
        `;
        let twitch = m.twitch == null ? "" : `
            <a href="https://twitch.tv/${m.twitch}" class="member-twitch member-link" target="_blank">
            <img src="./assets/images/logos/twitch.svg" alt="twitch logo" loading="lazy">
            </a>
        `;
        let li = `<li>${icon}${name}${twitter}${youtube}${twitch}</li>`;
        elm.insertAdjacentHTML("beforeend", li);
    });
}
