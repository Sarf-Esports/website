// © 2022 REVATI

console.log(`
####   #####  #   #    #    #####  #
#   #  #      #   #   # #     #    #
####   #####   # #   #   #    #    #
#  #   #       # #   #####    #    #
#   #  #####    #   #     #   #    #

      𝘜 𝘕 𝘋 𝘌 𝘍 𝘌 𝘈 𝘛 𝘌 𝘋   𝘚 𝘗 𝘐 𝘙 𝘐 𝘛 .｡+*
`);

/* Old version AA:
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
*/

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

function toggle_contact_modal() {
	let cm_cl = document.getElementById("contact-modal").classList;
	if (is_contact_visible == true) {
		cm_cl.add("hide-contact-modal");
		cm_cl.remove("show-contact-modal");
		is_contact_visible = false;
	} else {
		cm_cl.add("show-contact-modal");
		cm_cl.remove("hide-contact-modal");
		is_contact_visible = true;
	}
}

document.addEventListener("keydown", function (event) {
	close_modal(event.key);
});

function close_modal(key) {
	if (key == "Escape" && is_contact_visible) {
		toggle_contact_modal();
	}
}
