// © 2022 REVATI

function toggle_member_list(btn) {
    let member_list = btn.parentElement.getElementsByClassName("member-list")[0];
    member_list.classList.toggle("show");
    member_list.classList.toggle("hide");
    btn.classList.toggle("active");

    let member_links = member_list.getElementsByClassName("member-link");
    let delay = member_list.classList.contains("show") ? 200 : 0;
    setTimeout(() => {
        for (let i = 0; i < member_links.length; i++) {
            member_links[i].classList.toggle("show");
        }
    }, delay);
}

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
    for (let i = 0; i < member_list.length; i++) {
        let m = member_list[i];
        let icon = m.icon == null ? "" : `<img src="./assets/images/members/${m.icon}"" alt="member icon" loading="lazy" class="member-icon">`;
        let name = `<h2 class="member-name">${m.name}</h2>`;
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
    }
}