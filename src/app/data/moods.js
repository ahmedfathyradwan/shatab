// src/data/moods.js

const moods = [
  { 
    id: 1, 
    name: "مبهج", 
    desc: "ألوان زاهية ومشرقة تعطي طاقة وحيوية.",
    palettes: [
      ["#F5F5F5", "#E0E0E0", "#FFD166", "#06D6A0", "#EF476F", "#118AB2"], // محايد + أصفر/أخضر/أحمر/أزرق
      ["#FFFFFF", "#CFCFCF", "#FF9F1C", "#2EC4B6", "#FFBF69", "#E71D36"],
      ["#F9F9F9", "#BDBDBD", "#FDE74C", "#9BC53D", "#5BC0EB", "#C3423F"],
      ["#F8F8F8", "#E5E5E5", "#FFB703", "#219EBC", "#FB8500", "#8ECAE6"],
      ["#ECECEC", "#D6D6D6", "#FF6F61", "#6B4226", "#88D498", "#FFD700"]
    ]
  },
  { 
    id: 2, 
    name: "هادئ", 
    desc: "ألوان ناعمة وباردة تبعث على الاسترخاء.",
    palettes: [
      ["#F1FAEE", "#E5E5E5", "#A8DADC", "#457B9D", "#1D3557", "#6D98BA"],
      ["#FFFFFF", "#D9E2EC", "#BEE3DB", "#89B0AE", "#555B6E", "#FAF9F9"],
      ["#F7F7F7", "#C0C0C0", "#A2D2FF", "#BDE0FE", "#CDB4DB", "#FFC8DD"],
      ["#F2F2F2", "#D0D0D0", "#90BE6D", "#4D9078", "#EAF4F4", "#BFD7B5"],
      ["#ECEFF1", "#CFD8DC", "#A0CED9", "#D9BF77", "#6A7FDB", "#274060"]
    ]
  },
  { 
    id: 3, 
    name: "دافئ", 
    desc: "ألوان دافئة مثالية للشعور بالراحة والحميمية.",
    palettes: [
      ["#FAFAFA", "#E0E0E0", "#E9C46A", "#F4A261", "#E76F51", "#8D5524"],
      ["#FDFDFD", "#D8D8D8", "#F6AA1C", "#BC3908", "#941C2F", "#621708"],
      ["#FCFCFC", "#C9C9C9", "#F2CC8F", "#E07A5F", "#D62828", "#6A040F"],
      ["#F5F5F5", "#BDBDBD", "#FFD166", "#FF7B54", "#A53860", "#450920"],
      ["#FFF8E1", "#EDE7F6", "#E56B6F", "#6D597A", "#355070", "#EAAC8B"]
    ]
  },
  { 
    id: 4, 
    name: "فخم", 
    desc: "ألوان قوية وراقية تضيف لمسة من الفخامة.",
    palettes: [
      ["#F2F2F2", "#CFCFCF", "#2E294E", "#541388", "#D90368", "#FFD400"],
      ["#E0E0E0", "#A9A9A9", "#0D1B2A", "#1B263B", "#415A77", "#E0E1DD"],
      ["#F8F8F8", "#D9D9D9", "#3D2C8D", "#916BBF", "#C996CC", "#1B1B1B"],
      ["#FAFAFA", "#E0E0E0", "#4A148C", "#6A1B9A", "#CE93D8", "#BA68C8"],
      ["#ECECEC", "#BFBFBF", "#1C1C1C", "#3E065F", "#700B97", "#8E05C2"]
    ]
  },
  { 
    id: 5, 
    name: "طبيعي", 
    desc: "ألوان مستوحاة من الطبيعة تعطي دفء وارتباط بالأرض.",
    palettes: [
      ["#FAFAFA", "#E0E0E0", "#606C38", "#283618", "#DDA15E", "#BC6C25"],
      ["#FFFFFF", "#CCCCCC", "#4F772D", "#90A955", "#31572C", "#ECF39E"],
      ["#F5F5F5", "#D6D6D6", "#A98467", "#D4A373", "#FAEDCD", "#CCD5AE"],
      ["#ECECEC", "#C7C7C7", "#2D6A4F", "#40916C", "#74C69D", "#95D5B2"],
      ["#F7F7F7", "#B0B0B0", "#6D597A", "#B56576", "#E56B6F", "#EAAC8B"]
    ]
  },
  { 
    id: 6, 
    name: "حيوي", 
    desc: "ألوان مبهجة تناسب الغرف الشبابية وتعطي طاقة.",
    palettes: [
      ["#FFFFFF", "#CFCFCF", "#FF595E", "#8AC926", "#1982C4", "#6A4C93"],
      ["#FAFAFA", "#D0D0D0", "#E63946", "#A8DADC", "#457B9D", "#1D3557"],
      ["#F5F5F5", "#BDBDBD", "#FF006E", "#FB5607", "#FFBE0B", "#3A86FF"],
      ["#FCFCFC", "#CECECE", "#FF9F1C", "#2EC4B6", "#E71D36", "#3D348B"],
      ["#ECECEC", "#BFBFBF", "#FF7B54", "#FFB26B", "#FFD56F", "#939B62"]
    ]
  },
  { 
    id: 7, 
    name: "مونوكروم", 
    desc: "بالِتة أنيقة تعتمد على تدرجات الرمادي والأسود والأبيض.",
    palettes: [
      ["#000000", "#333333", "#555555", "#888888", "#DDDDDD", "#FFFFFF"],
      ["#1C1C1C", "#2E2E2E", "#4D4D4D", "#707070", "#BFBFBF", "#F2F2F2"],
      ["#101820", "#3D3D3D", "#686868", "#A0A0A0", "#CFCFCF", "#EDEDED"],
      ["#212121", "#424242", "#616161", "#9E9E9E", "#DADADA", "#FAFAFA"],
      ["#141414", "#2C2C2C", "#494949", "#737373", "#B5B5B5", "#EFEFEF"]
    ]
  },
  { 
    id: 8, 
    name: "باستيل", 
    desc: "ألوان فاتحة وناعمة تعطي إحساس بالرقة والهدوء.",
    palettes: [
      ["#FFFFFF", "#EAEAEA", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"],
      ["#FDFDFD", "#DCDCDC", "#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE"],
      ["#F9F9F9", "#CECECE", "#E2F0CB", "#B5EAD7", "#C7CEEA", "#FFDAC1"],
      ["#F7F7F7", "#D6D6D6", "#FFF1E6", "#FDE2E4", "#FAD2E1", "#E2ECE9"],
      ["#FAFAFA", "#D0D0D0", "#FFD6FF", "#E7C6FF", "#C8B6FF", "#B8C0FF"]
    ]
  }
]

export default moods
