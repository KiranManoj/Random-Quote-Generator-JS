var data = [
  {
    id: 1,
    image:
      "https://imgs.search.brave.com/AfxXZOr-pio6V5JeyGoYEy93MKHC_0RayFTfdNPR05M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/c2Rlc2suY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzAx/L1dhcnJlbi1CdWZm/ZXR0LUhELVdhbGxw/YXBlci5qcGc",
    quote: "The best investment you can make is in yourself.",
    author: "Warren Buffet",
  },
  {
    id: 2,
    image:
      "https://imgs.search.brave.com/agcuTQRS1cQZpydr9DBe9lCEYG6bGjazmI2W_5MAMeg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2QxL0Nhcmxvc19T/bGltXygxMTIxMjYz/ODI0MykuanBn",
    quote:
      "Live the present intensely and fully, do not let the past be a burden, and let the future be an incentive. Each person forges his or her own destiny.",
    author: "Carlos Slim Helu",
  },
  {
    id: 3,
    image:
      "https://imgs.search.brave.com/QcPGPp7eVNMdLmeQrxkhQYhJ5doPIML9UL4-7YG8rFk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8zODcv/ODQzL0hELXdhbGxw/YXBlci1jZWxlYnJp/dHktamVmZi1iZXpv/cy5qcGc",
    quote: "Life’s too short to hang out with people who aren’t resourceful.",
    author: "Jeff Bezos",
  },
  {
    id: 4,
    image:
      "https://imgs.search.brave.com/WGcqvAoJlrLBwKF7Ds8_IQ2udXSBHu3zTISyqvPd7ec/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lMS5w/eGZ1ZWwuY29tL2Rl/c2t0b3Atd2FsbHBh/cGVyLzE2Ni84MDkv/ZGVza3RvcC13YWxs/cGFwZXItYXdlc29t/ZS1tYXJrLXp1Y2tl/cmJlcmctbWFyay16/dWNrZXJiZXJnLXRo/dW1ibmFpbC5qcGc",
    quote:
      "Some people dream of success, while others wake up and work hard at it.",
    author: "Mark Zuckerberg",
  },
  {
    id: 5,
    image:
      "https://imgs.search.brave.com/xVc6pZxKqo-3eErNWikQtisuOB_Yj7ePA06e6ALPV7o/rs:fit:500:0:0:0/g:ce/aHR0cDovL3d3dy5m/YW1vdXMtZW50cmVw/cmVuZXVycy5jb20v/aW1hZ2VzL2NoYXJs/ZXMta29jaC5qcGc",
    quote:
      "To do meaningful work is to contribute – to create value in society.",
    author: "Charles Koch",
  },
  {
    id: 6,
    image:
      "https://imgs.search.brave.com/d-TKgO_YrQzDGbx1ihP2sMsznMBbRHMCR3nqn2MFeEE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU5/NTQzOTY5L3Bob3Rv/L3BoaWwta25pZ2h0/LWNoYWlybWFuLWFu/ZC1jby1mb3VuZGVy/LW9mLW5pa2UtaW5j/LWxhdWdocy1kdXJp/bmctYS1wYW5lbC1k/aXNjdXNzaW9uLWF0/LXRoZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bFluQWpZ/SUt5WHIxWmFRUGlD/bnFjWUN2WV90d0ta/bHJZRkNZM29QaWhp/ND0",
    quote:
      "Dream audaciously. Have the courage to fail forward. Act with urgency.",
    author: "Phil Knight",
  },
  // { id: 1, image: "", quote: "Hello all", author: "" },
  // { id: 1, image: "", quote: "Hello all", author: "" },
  // { id: 1, image: "", quote: "Hello all", author: "" },
  // { id: 1, image: "", quote: "Hello all", author: "" },
  // { id: 1, image: "", quote: "Hello all", author: "" },
  // { id: 1, image: "", quote: "Hello all", author: "" },
];

function GenerateQuote(){
  var randomIndex = Math.floor(Math.random() * data.length) + 1;

  var randomId = data[randomIndex];
  document.getElementById("image").src = randomId.image;
  document.getElementById("quote").innerHTML= randomId.quote;
  document.getElementById("author").innerHTML = randomId.author;
}