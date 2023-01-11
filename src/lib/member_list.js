// © 2022 REVATI

export function build_member_lists() {
    let path = location.href.replace("index.html", "") + "assets/data/member_list.json";
    fetch(path)
        .then(response => response.json())
        .then(data => {
            build_member_list(document.getElementById("fortnite-member-list"), data.fortnite);
            build_member_list(document.getElementById("apex-member-list"), data.apex);
            build_member_list(document.getElementById("minecraft-member-list"), data.minecraft);
            build_member_list(document.getElementById("streamer-member-list"), data.streamer);
            build_member_list(document.getElementById("owner-member-list"), data.owner);
        })
        .catch(_ => {
            // for local environment
            fetch("https://sarf-esports.github.io/website/assets/data/member_list.json")
                .then(response => response.json())
                .then(data => {
                    build_member_list(document.getElementById("fortnite-member-list"), data.fortnite);
                    build_member_list(document.getElementById("apex-member-list"), data.apex);
                    build_member_list(document.getElementById("minecraft-member-list"), data.minecraft);
                    build_member_list(document.getElementById("streamer-member-list"), data.streamer);
                    build_member_list(document.getElementById("owner-member-list"), data.owner);
                });
        });
}

/**
 * @param {HTMLElement | null} elm
 * @param {any[]} member_list
 */
function build_member_list(elm, member_list) {
    member_list.forEach((m) => {
        let icon_img = m.icon == null ? "noimage.png" : m.icon;
        let icon = `<img src="./assets/images/members/${icon_img}" alt="member icon" loading="lazy">`;
        let name = `<h3>${m.name}</h2>`;
        let twitter = m.twitter == null ? "" : `
            <a href="https://twitter.com/${m.twitter}" class="member-twitter" target="_blank">
            <img src="./assets/images/logos/twitter-logo-01282021/Twitter logo/SVG/Logo blue.svg" alt="twitter logo" title="@${m.twitter}" loading="lazy">
            </a>
        `;
        let yt_path = m.youtube == null ? undefined : m.youtube[0] == "@" ? m.youtube : `channel/${m.youtube}`;
        let youtube = m.youtube == null ? "" : `
            <a href="https://youtube.com/${yt_path}" class="member-youtube" target="_blank">
            <img src="./assets/images/logos/youtube.png" alt="youtube logo" title="/${yt_path}" loading="lazy">
            </a>
        `;
        let twitch = m.twitch == null ? "" : `
            <a href="https://twitch.tv/${m.twitch}" class="member-twitch" target="_blank">
            <img src="./assets/images/logos/twitch.svg" alt="twitch logo" title="@${m.twitch}" loading="lazy">
            </a>
        `;
        let li = `<li>${icon}${name}${twitter}${youtube}${twitch}</li>`;

        // @ts-ignore
        // `*-member-list` is always exist.
        elm.insertAdjacentHTML("beforeend", li);
    });
}
