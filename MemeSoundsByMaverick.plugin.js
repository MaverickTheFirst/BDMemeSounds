/**
 * @name MemeSoundsByMaverick
 * @invite yNqzuJa
 * @authorLink https://github.com/MaverickTheFirst
 * @source https://github.com/MaverickTheFirst/MemeSoundsByMaverick/blob/main/MemeSoundsByMaverick.plugin.js
 */

module.exports = (() => {
	const config =
	{
		info: {
			name: "MemeSoundsByMaverick",
			authors: [{
				name: "Maverick",
				discord_id: "845712972106039357",
				github_username: "MaverickTheFirst"
			}],
			version: "1.4",
			description: "When the plugin is enabled, meme sounds will play based on what is being sent in chat! Contains an extensive library of meme sounds.",
			github: "https://github.com/MaverickTheFirst/BDMemeSounds/blob/main/MemeSoundsByMaverick.plugin.js",
			github_raw: "https://raw.githubusercontent.com/MaverickTheFirst/BDMemeSounds/main/MemeSoundsByMaverick.plugin.js"
		},
		defaultConfig: [{
			id: "general",
			name: "general settings",
			type: "category",
			collapsible: true,
			shown: false,
			settings: [{
				id: "onlyCur",
				name: "Current channel only",
				note: "MEME SOUNDS",
				type: "switch",
				value: true
			}, {
				id: "delay",
				name: "Delay between each sounds (ms)",
				note: "The amount of milliseconds to wait between each bruh when multiple sounds are found within the same message.",
				type: "slider",
				value: 200,
				min: 10,
				max: 1000,
				renderValue: v => Math.round(v) + "ms"
			}]
		}]
	};

	return !global.ZeresPluginLibrary ? class {
		constructor() { this._config = config; }

		getName = () => config.info.name;
		getAuthor = () => config.info.description;
		getVersion = () => config.info.version;

		load() {
			BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
				confirmText: "Download Now",
				cancelText: "Cancel",
				onConfirm: () => {
					require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (err, res, body) => {
						if (err) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
						await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
					});
				}
			});
		}

		start() { }
		stop() { }
	} : (([Plugin, Api]) => {

		const plugin = (Plugin, Api) => { try {
			const {
				DiscordModules: { Dispatcher, SelectedChannelStore }
			} = Api;

			const audio = new Audio();

			return class Bruh extends Plugin {
				constructor() {
					super();
				}

				getSettingsPanel() {
					return this.buildSettingsPanel().getElement();
				}
	
				onStart() {
					Dispatcher.subscribe("MESSAGE_CREATE", this.messageEvent);
				}
				
				messageEvent = async ({ channelId, message, optimistic }) => {
					if (this.settings.general.onlyCur && channelId != SelectedChannelStore.getChannelId())
						return;

					if (!optimistic) {
						const count = (message.content.match(/bruh/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playBruh();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/damn/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playDamn();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/sed/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playED();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/keliye debo/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playRUN();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/bazinga/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playBazinga();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/sus/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playSus();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/😎/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playJohnCena();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/No?ice/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playNice();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/Hehe/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playHehe();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/Sui/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playSui();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/nope/gmi || /no/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playNope();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/respect/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playRespect();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/lol/gmi || /lmao/gmi || /😂/gmi || /😭/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playLol();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/lmfao/gmi) || []).length;
				
						for (let i = 0; i < count; i++) {
							this.playLmfao();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/Bye/gmi) || []).length;
			
						for (let i = 0; i < count; i++) {
							this.playBye();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/dead chat/gmi || /ded chat/gmi || /chat ded/gmi) || []).length;
			
						for (let i = 0; i < count; i++) {
							this.playCrickets();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/😑/gmi || /🗿/gmi) || []).length;
			
						for (let i = 0; i < count; i++) {
							this.playVineBoom();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/oof/gmi || /uff/gmi) || []).length;
			
						for (let i = 0; i < count; i++) {
							this.playOof();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/ah/gmi) || []).length;
			
						for (let i = 0; i < count; i++) {
							this.playAH();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/shit/gmi || /sh*t/gmi) || []).length;
			
						for (let i = 0; i < count; i++) {
							this.playSHIT();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/🍦/gmi || /🍧/gmi || /🍨/gmi || /ice cream/gmi) || []).length;
			
						for (let i = 0; i < count; i++) {
							this.playBC();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/ur ded/gmi || /i will send you to jesus/gmi || /youre ded/gmi || /you're ded/gmi) || []).length;
			
						for (let i = 0; i < count; i++) {
							this.playDed();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/stupid/gmi || /stoobid/gmi) || []).length;
			
						for (let i = 0; i < count; i++) {
							this.playStupid();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/wth/gmi || /what the hell/gmi || /what the hail/gmi) || []).length;
			
						for (let i = 0; i < count; i++) {
							this.playWTH();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/wtf/gmi) || []).length;
			
						for (let i = 0; i < count; i++) {
							this.playWTF();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}

					if (!optimistic) {
						const count = (message.content.match(/Goodnight/gmi) || []).length;
			
						for (let i = 0; i < count; i++) {
							this.playOutro();

							await new Promise(r => setTimeout(r, this.settings.general.delay));
						}
					}
				};
				
				playBruh() {
					audio.src = "https://www.myinstants.com/media/sounds/movie_1.mp3";
					audio.play();
				}

				playAH() {
					audio.src = "https://www.myinstants.com/media/sounds/haaaaaaaa.mp3";
					audio.play();
				}

				playSHIT() {
					audio.src = "https://www.myinstants.com/media/sounds/oh-shit_4.mp3";
					audio.play();
				}

				playBC() {
					audio.src = "https://www.myinstants.com/media/sounds/bing-chilling_fcdGgUc.mp3";
					audio.play();
				}

				playDed() {
					audio.src = "https://www.myinstants.com/media/sounds/i-will-send-you-to-jesus-steven-he.mp3";
					audio.play();
				}

				playStupid() {
					audio.src = "https://www.myinstants.com/media/sounds/steven-he-stupid.mp3";
					audio.play();
				}

				playWTH() {
					audio.src = "https://www.myinstants.com/media/sounds/what-the-hail-you-say-steven-he.mp3";
					audio.play();
				}

				playWTF() {
					audio.src = "https://www.myinstants.com/media/sounds/jontron-what_K9mOgXd.mp3";
					audio.play();
				}

				playDamn() {
					audio.src = "https://www.myinstants.com/media/sounds/god-damn-1.mp3";
					audio.play();
				}

				playED() {
					audio.src = "https://www.myinstants.com/media/sounds/emotional-damage-meme.mp3";
					audio.play();
				}
				
				playRUN() {
					audio.src = "https://www.myinstants.com/media/sounds/run-vine-sound-effect.mp3";
					audio.play();
				}

				playBazinga() {
					audio.src = "https://www.myinstants.com/media/sounds/bazinga.swf.mp3";
					audio.play();
				}

				playSus() {
					audio.src = "https://www.myinstants.com/media/sounds/among.mp3";
					audio.play();
				}

				playJohnCena() {
					audio.src = "https://www.myinstants.com/media/sounds/and-his-name-is-john-cena-1.mp3";
					audio.play();
				}

				playNice() {
					audio.src = "https://www.myinstants.com/media/sounds/nioce.mp3";
					audio.play();
				}

				playHehe() {
					audio.src = "https://www.myinstants.com/media/sounds/ainsley_harriott_and_his_spicy_meatconverttoaudio.mp3";
					audio.play();
				}

				playSui() {
					audio.src = "https://www.myinstants.com/media/sounds/suuuuuuuuuuuuu.mp3";
					audio.play();
				}

				playNope() {
					audio.src = "https://www.myinstants.com/media/sounds/engineer_no01_1.mp3";
					audio.play();
				}

				playRespect() {
					audio.src = "https://www.myinstants.com/media/sounds/tmpbxydyrz3.mp3";
					audio.play();
				}

				playLol() {
					audio.src = "https://www.myinstants.com/media/sounds/baby-laughing-meme.mp3";
					audio.play();
				}

				playLmfao() {
					audio.src = "https://www.myinstants.com/media/sounds/oh-no-no-no-no-laugh.mp3";
					audio.play();
				}

				playBye() {
					audio.src = "https://www.myinstants.com/media/sounds/bye-have-a-great-time.mp3";
					audio.play();
				}

				playCrickets() {
					audio.src = "https://www.myinstants.com/media/sounds/awkward-cricket-sound-effect.mp3";
					audio.play();
				}

				playOof() {
					audio.src = "https://www.myinstants.com/media/sounds/roblox-death-sound_1.mp3";
					audio.play();
				}

				playVineBoom() {
					audio.src = "https://www.myinstants.com/media/sounds/vine-boom.mp3";
					audio.play();
				}

				playOutro() {
					audio.src = "https://www.myinstants.com/media/sounds/outro-song_oqu8zAg.mp3";
					audio.play();
				}

				onStop() {
					Dispatcher.unsubscribe("MESSAGE_CREATE", this.messageEvent);
				}
			}
		} catch (e) { console.error(e); }};

		return plugin(Plugin, Api);
	})(global.ZeresPluginLibrary.buildPlugin(config));
})();