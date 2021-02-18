const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],

			planetas: [],

			favoritos: [],

			descripcionesPersonajes: [
				{
					description:
						"Luke Skywalker es un personaje ficticio y el protagonista de la trilogía original de la saga de ciencia ficción Star Wars. Procedente de la colonia de asteroides de Polis Massa, es el único hijo varón de Anakin Skywalker y la senadora Padmé Amidala (antigua reina del planeta Naboo).Tiene una hermana melliza llamada Leia Organa,, de la cual fue separado al nacer con el objetivo de ocultarlo y protegerlo del emperador Palpatine (Darth Sidious) y del Imperio Galáctico. Su cuñado y compañero de batallas se llama Han Solo, famoso contrabandista y miembro de la Alianza Rebelde."
				},
				{
					description:
						"C-3PO es un personaje ficticio del universo de la Guerra de las Galaxias. Se trata de un androide, diseñado para el servicio de los humanos para llevar a cabo dichas tareas, para lo que domina seis millones de formas de comunicación. El personaje aparece en los seis episodios de la saga, además de ser uno de los personajes más importantes de la serie animada Droids y aparece en Rogue One: A Star Wars Story y Star Wars: The Clone Wars. También hace apariciones frecuentes en cómics, novelas y videojuegos del Universo Expandido."
				},
				{
					description:
						"R2-D2, un robot del tipo R2, perteneció a las fuerzas de defensa en Naboo sirvió al Rey Veruna durante su término. Este droide siempre estuvo alojado en la Nave Real de Naboo, al igual que otros congéneres con la simple función de reparar cualquier parte de la nave y asistir como navegantes. R2-D2 pertenecía a un tipo de robots llamados droides astromecánicos (Astro Droides) que eran muy conocidos y apreciados a lo largo de la Galaxia."
				},
				{
					description:
						"Darth Vader, también conocido por su nombre de nacimiento Anakin Skywalker, es un personaje de ficción en la franquicia de Star Wars. Vader aparece en la trilogía original como un antagonista cuyas acciones dirigen la trama, mientras que su pasado como Anakin Skywalker y la historia de su corrupción por Darth Sidious y su paso al Lado Oscuro son centrales en la narrativa de la trilogía de la precuela."
				},
				{
					description:
						"La Princesa Leia Organa de Alderaan (nacida como Leia Skywalker y más tarde llamada Leia Organa) es un personaje de ficción de la saga Star Wars. Es hija de la senadora Padmé Amidala y del Caballero Jedi Anakin Skywalker, hermana melliza de Luke Skywalker y esposa de Han Solo. Adoptada por el senador Bail Organa y su esposa Breha después del fallecimiento de su madre en el parto y la transformación de su padre en Darth Vader, fue separada de su hermano Luke al nacer, con el objetivo de ocultarlos y protegerlos del emperador Palpatine (Darth Sidious) y del Imperio Galáctico. Al crecer se volvió la líder de la Alianza Rebelde1​. Pero 30 años después, se volvió la general de La Resistencia después de que su hijo, Ben Solo se unió a la Primera Orden, al destruir todo a su paso, y al querer traerlo de vuelta. Pero por la mala noticia de Rey, al saber Kylo Ren mató a Han Solo, esa esperanza se rompe, hasta que finalmente encuentra a su hermano Luke Skywalker, y con la ayuda de Rey, emprende el viaje para encontrarlo. Hasta que finalmente,en la tercera trilogía, muere después de ayudar a Rey a traer a su hijo de vuelta al lado luminoso."
				},
				{
					description:
						"Owen Lars era un granjero de humedad humano del planeta desertico Tatooine. Era el hijo de Aika y Cliegg Lars, y se convirtió en el hermanastro del Caballero Jedi Anakin Skywalker cuando Cliegg se volvió a casar con Shmi Skywalker, una antigua esclava. Cuando Shmi fue asesinado por Incursores Tusken y Cliegg falleció poco después, Lars fue el responsable de la granja de su familia. Por esa época, Lars se casó con su novia, Beru Whitesun, y trabajaron duro para mantener la casa. Tres años más tarde, el hermanastro de Lars traicionó a la Orden Jedi y se convirtió en el Lord Sith Darth Vader. En ese momento, Lars y su esposa recibieron la custodia del hijo de Skywalker, Luke, por el Maestro Jedi de Skywalker, Obi-Wan Kenobi."
				},
				{
					description:
						"Beru Whitesun Lars era una mujer humana de Tatooine. Estaba casada con Owen Lars y crió a Luke Skywalker después de la caída de la República Galáctica."
				},
				{
					description:
						"R5-D4 era un droide astromecánico serie R5 con rayas blancas y rojas. R5-D4 pertenecía a los Jawas de Tatooine que capturaron a R2-D2 y C-3PO cuando estos se perdieron en el desierto tras escapar de la Tantive IV con los planes de la Estrella de la Muerte."
				},
				{
					description:
						"Biggs Darklighter es un personaje del universo de Star Wars. De raza humana, este piloto era miembro de la flota de la Alianza Rebelde. Durante la Batalla de Yavin, tenía el código de Rojo Tres y pilotaba un caza X-Wing. Biggs Darklighter era amigo de la Infancia de Luke Skywalker."
				},
				{
					description:
						"Obi-Wan Kenobi es un personaje ficticio de la saga Star Wars. Obi-Wan es un maestro jedi de la antigua República Galáctica y como tal, maestro de Anakin y Luke Skywalker. Obi Wan es una figura clave en las Guerras Clon, donde fue conocido como El Negociador, la práctica extinción de los Jedi, la caída de la República Galáctica y la lucha de la Alianza rebelde contra el posterior Imperio Galáctico."
				}
			],

			descripcionesPlanetas: [
				{
					description:
						"Tatooine es un planeta desértico (menos del 1% de la superficie esta cubierto de agua); la única forma de hallar agua es extrayéndola de la humedad de la atmósfera. Posee dos soles, que crean una atmósfera muy calurosa. No tiene un gobierno establecido, siendo un banquete para bandidos, traficantes y cazarrecompensas."
				},
				{
					description:
						"Alderaan es un planeta ficticio del universo de Star Wars. Aparece en las películas Star Wars: Episode III - Revenge of the Sith y Star Wars: Episode IV - A New Hope.  Posee un clima benévolo y predecible, similar a nuestro templado clima terrestre. Cuenta con amplias y ricas praderas. Su flora y fauna es de las más variadas, llegando a contar más de 8000 especies vegetales, muchas con flores. Pese a no poseer mares, cuenta con vastos lagos y un mar polar congelado."
				},
				{
					description:
						"Yavin 4 fue la cuarta luna en órbita del gigante gaseoso Yavin Prime, cubierta de junglas. En algún momento durante la Guerra Civil Galáctica, albergó la base principal de la Alianza Para Restaurar la República, un grupo de luchadores de la resistencia que se oponían a la tiranía del Imperio Galáctico. Tras una gran batalla que tuvo lugar alrededor de Yavin, la Alianza trasladó su base a Hoth."
				},
				{
					description:
						"Hoth era un planeta helado y remoto que se encontraba en la sexta posición del sistema estelar que poseía el mismo nombre. Era el lugar donde se ubicaba la Base Eco, la sede temporal de la Alianza para Restaurar la República, hasta que el Imperio Galáctico encontró a los Rebeldes, iniciando una importante confrontación conocida como la Batalla de Hoth."
				},
				{
					description:
						"Dagobah era un planeta en el sistema Dagobah, y uno de los lugares más puros de la galaxia dentro de la Fuerza. Un mundo lejano lleno de pantanos y bosques, sirvió como refugio para el Gran Maestro Jedi Yoda durante su exilio tras la destrucción de la Orden Jedi. Fue allí donde Luke Skywalker recibió un entrenamiento avanzado en los caminos de la Fuerza bajo la tutela del Maestro Jedi Yoda y más tarde sería testigo de su muerte y transformación en la Fuerza."
				},
				{
					description:
						"Bespin era un inmenso gigante gaseoso ubicado en las proximidades del sistema Anoat, un sector desolado de la galaxia. Bespin tenía varias lunas, y su masa gaseosa contenía un estrato delgado de atmósfera habitable. Sus capas eran una fuente rara de gas tibanna, que era cosechado y refinado en varios complejos mineros, como Ciudad Nube, una metrópoli opulenta suspendida en las enormes nubes ondulantes del planeta. La ciudad ugnaught de Ugnorgrad también estaba ubicada sobre el planeta, siendo gobernada por el Rey Ozz en el tiempo posterior a la Batalla de Endor. Durante la Guerra Civil Galáctica, Bespin permaneció sin afiliación, pero eso no impidió que el Imperio Galáctico acuartelara el planeta y se apoderara de Ciudad Nube. Sin embargo, con la derrota del Imperio en Endor, el gigante gaseoso y su próspera colonia minera terminaron recuperando su libertad."
				},
				{
					description:
						"Endor (también conocido como la Luna Boscosa de Endor o la Luna Santuario) era una pequeña luna boscosa que orbitaba el planeta del Borde Exterior de su mismo nombre y era el mundo naral de las especies inteligentes Ewoks y de Yuzzums."
				},
				{
					description:
						"Naboo era un planeta abundante en el Borde Medio, cerca de la frontera de los Territorios del Borde Exterior. Fue el hogar de la especie gungan y de una población de humanos conocida como los Naboo."
				},
				{
					description:
						"Coruscant (pronunciado /'kɔɹəsɑnt/), también conocido como Centro Imperial durante el reinado del Imperio Galáctico, fue una ecumenópolis—un planeta cubierto de ciudad, colectivamente conocida como Ciudad Galáctica— en el sistema Coruscant de los Mundos del Núcleo. Aunque era asunto de debate entre los historiadores, en general se creía que Coruscant era el planeta natal original de la humanidad. Destacado por su cultura cosmopolita y sus enormes rascacielos, la población de Coruscant consistía en aproximadamente un billón de ciudadanos pertenecientes a un amplio abanico de especies humanoides y alienígenas. Además, la ubicación estratégica de Coruscant al final de varias grandes rutas hiperespaciales permitió que creciera en poder e influencia, haciendo que el planeta-ciudad superara a sus rivales iniciales y se convirtiera en un núcleo galáctico de cultura, educación, finanzas, artes, política y tecnología. Albergaba varios puntos de gran interés, incluido el Templo Jedi, la Plaza de los Monumentos y el Edificio del Senado."
				},
				{
					description:
						"Kamino (pronunciado /kə'minoʊ/) era un planeta acuático ubicado en un sistema estelar extragaláctico que se encontraba al sur de la galaxia satélite Laberinto Rishi y más allá de la galaxia conocida. Estaba habitado por los kaminoanos, una raza de seres altos y esbeltos que eran considerados como una especie misteriosa con tendencia al hermetismo. También eran conocidos por su tecnología de clonación que finalmente condujo a la creación de un ejército clon para la República Galáctica."
				}
			],

			imagenesDePersonajes: [
				{
					imagen:
						"https://hipertextual.com/files/2018/12/lukeskywalkersableluzstarwarsafkad-454a516bfb5e4a16c018f6b9ec3ec302-1200x600.jpg"
				},
				{
					imagen:
						"https://i1.wp.com/wipy.tv/wp-content/uploads/2020/09/pierna-plateada-de-c3po.jpg?fit=1000%2C600&ssl=1"
				},
				{
					imagen: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/03/15885120366138.jpg"
				},
				{
					imagen:
						"https://i2.wp.com/wipy.tv/wp-content/uploads/2020/06/darth-vader-es-el-sith-mas-poderoso.jpg?fit=1000%2C600&ssl=1"
				},
				{
					imagen: "https://hipertextual.com/files/2013/03/carrie-fisher-sera-leia.jpg"
				},
				{
					imagen: "https://seriepolis.com/wp-content/uploads/2019/10/Joel-Edgerton-Star-Wars.jpg"
				},
				{
					imagen: "http://pm1.narvii.com/6293/db859b249381c30a6be8f8242046105e552cd54d_00.jpg"
				},
				{
					imagen:
						"https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=114%2C0%2C1332%2C666"
				},
				{
					imagen: "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780"
				},
				{
					imagen: "https://www.cinemascomics.com/wp-content/uploads/2020/10/OBI-WAN-KENOBI.jpg"
				}
			],

			imagenesDePlanetas: [
				{
					imagen: "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
				},
				{
					imagen: "https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg"
				},
				{
					imagen: "https://static.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png"
				},
				{
					imagen: "https://static.wikia.nocookie.net/esstarwars/images/1/1d/Hoth_SWCT.png"
				},
				{
					imagen: "https://static.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg"
				},
				{
					imagen: "https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png"
				},
				{
					imagen: "https://static.wikia.nocookie.net/esstarwars/images/5/50/Endor_FFGRebellion.png"
				},
				{
					imagen: "https://static.wikia.nocookie.net/esstarwars/images/5/50/Naboo.jpg"
				},
				{
					imagen: "https://i.ytimg.com/vi/HCu7FhoDhtc/maxresdefault.jpg"
				},
				{
					imagen: "https://static.wikia.nocookie.net/esstarwars/images/5/52/Kamino-DB.png"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadPersonajes: async () => {
				const url = "https://www.swapi.tech/api/people/";
				const respuesta = await fetch(url);
				const data = await respuesta.json();
				setStore({ personajes: data.results });
				console.log(getStore().personajes);
				//loop para data, para cada uno fetch con el url especifico y guarda los resultados en un array
				let otroArray = [];
				for (let item of data.results) {
					//fetch para cada elemento
					const respuesta2 = await fetch(item.url);
					const data2 = await respuesta2.json();
					otroArray.push(data2.result.properties);
				}
				setStore({ personajes: [...otroArray] });
				console.log(getStore().personajes);
			},

			loadPlanetas: async () => {
				const url = "https://www.swapi.tech/api/planets/";
				const respuesta = await fetch(url);
				const data = await respuesta.json();
				setStore({ planetas: data.results });
				console.log(getStore().planetas);
				//loop para data, para cada uno fetch con el url especifico y guarda los resultados en un array
				let otroArray2 = [];
				for (let item of data.results) {
					//fetch para cada elemento
					const respuesta2 = await fetch(item.url);
					const data2 = await respuesta2.json();
					otroArray2.push(data2.result.properties);
				}
				setStore({ planetas: [...otroArray2] });
				console.log(getStore().planetas);
			},

			addFavoritos: (name, type) => {
				const store = getStore();
				let contador = 0;
				store.favoritos.map(each => {
					if (each.name == name) {
						contador = 1;
					}
				});
				if (contador == 0) {
					setStore({
						favoritos: [
							...store.favoritos,
							{
								name: name,
								type: type
							}
						]
					});
				}
			},

			deleteFavoritos: id => {
				const store = getStore();
				const nuevoFavorito = store.favoritos.filter((item, i) => i !== id);
				setStore({ favoritos: nuevoFavorito });
			}
		}
	};
};

export default getState;
