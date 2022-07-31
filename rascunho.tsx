// function handleGenerateRandom() {
//   const random = Math.floor(Math.random() * people.length);
//   const { name, height, mass, hair_color, skin_color } = people[random];
//   const newPeople = { name, height, mass, hair_color, skin_color };
//   setPeople((prev) => [...prev, newPeople]);
// }

// useEffect(() => {
//   async function AllPeople() {
//     try {
//       const { data } = await api.get(`people`);
//       setPeople(data.results);

//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   AllPeople();
// }, []);
