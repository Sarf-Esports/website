console.log(`
                                     -*ff
                                            :f*++
                              f              ffff=
                          ffff
                         ffffe   SSSSS
                          eSSSSSSSSSSSSSSSS
                 *        SSSSSSSSSSSSSSSSSSS
                        SSSSSSSSS    .SSSSSSSSS
                 +fffeSSSSSSS             SSSSSS:
              .fffffeSSSSSSSe+             =SSSSSfff
             =ffffffSSSSSSSfffeSSSSSSSS      SSefffff
           ffffffffSSSSSSSf  SSSSSSSSSSSS    ffffffff*
          fffffffffSSSSSSefeSSSSSSSSSSSSSS=   eeSeee       fffff
           :ffffffeSSSSSSffSSSSSSS    SSSSS    SSSSS   *fffffffff
              ffffeSSSSS  .SSSSSSf*   SSSSS=   SSSSS   .     ffff.
                   SSSSS   *SSSSSefffffeSSSSffSSSSSS-         f   f
                   SSSSS    SSSSSSSeeeffffeeffSSSSSSff             f
                   =SSSSS    SSSSSSSSSSS:   feSSSSef
     f        .     SSSSS     SSSSSSSSSSS    eeeffff             *
                     SSSSS      eSefffffff-*fffffffff
               fff   SSSSSSS       fffffffffffffffff.
             fffffffffSSSSSSSS        fffffffffffff
          fffffffffffffeSSSSSSSSS     SSeSS=+fff
             fffffffffffffeeSSSSS    +SSSSS
                  ffffffffffffffeSSSSSSSSS
                      =ffffffffffffeeSS+
                               ffffffff**

 ###                   ###     #####                               #
#   #                 #   #    #                                   #
#       ###   # ###  ####      #       ####  # ##    ###   # ###  ####    ####
 ###   #   #  ##      #        #####  #      ##  #  #   #  ##      #     #    
    #   ####  #       #        #       ###   ##  #  #   #  #       #      ###
#   #  #   #  #       #        #          #  # ##   #   #  #       #         #
 ###    ####  #       #        #####  ####   #       ###   #        ##   ####
                                             #
`);

let is_twitter_visible = false;

window.addEventListener("scroll", function () {
	if (!is_twitter_visible) {
		show_twitter_icon();
		is_twitter_visible = true;
	}
});

function show_twitter_icon() {
	document.getElementById("twitter").classList.add("show-twitter");
}

let is_contact_visible = false;

function show_contact_modal() {
	document.getElementById("contact-modal").classList.add("show-contact-modal");
	document.getElementById("contact-modal").classList.remove("hide-contact-modal");
	is_contact_visible = true;
}

function hide_contact_modal() {
	document.getElementById("contact-modal").classList.add("hide-contact-modal");
	document.getElementById("contact-modal").classList.remove("show-contact-modal");
	is_contact_visible = false;

}

document.addEventListener("keydown", function (event) {
	close_modal(event.key);
});

function close_modal(key) {
	if (key == "Escape" && is_contact_visible) {
		hide_contact_modal();
	}
}
