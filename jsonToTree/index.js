function transDate(list, idstr, pidstr) {
    const result = [],
      temp = {};
    for (let i = 0; i < list.length; i++) {
      temp[list[i][idstr]] = list[i]; //将nodes数组转成对象类型
    }
    console.log("temp")
    console.log(temp)
    for (let j = 0; j < list.length; j++) {
      let tempVp = temp[list[j][pidstr]]; //获取每一个子对象的父对象
      // if(!tempVp["label"]){
      //     tempVp["label"] = '';
      // }
      //  tempVp["label"] = tempVp["name"] ;
      if (tempVp) {
        //判断父对象是否存在，如果不存在直接将对象放到第一层
        if (!tempVp["children"]) tempVp["children"] = []; //如果父元素的nodes对象不存在，则创建数组
        tempVp["children"].push(list[j]); //将本对象压入父对象的nodes数组
      } else {
        result.push(list[j]); //将不存在父对象的对象直接放入一级目录
      }
    }
    return result;
  }

  let data = [
      {id:"1",pid:"0",name:"组织机构"},
      {id:"2",pid:"1",name:"董事会"},
      {id:"3",pid:"1",name:"总裁办"},
      {id:"4",pid:"3",name:"北京研发中心"},
      {id:"5",pid:"3",name:"上海研发中心"},
      {id:"6",pid:"3",name:"深圳研发中心"},
      {id:"7",pid:"4",name:"北京R001部门"},
      {id:"8",pid:"3",name:"上海R002部门"},
      {id:"9",pid:"6",name:"深圳R003部门"},
      {id:"10",pid:"7",name:"R001前端部门"}
  ]

 let treedata =  transDate(data,"id","pid");
treedata = JSON.parse(
    JSON.stringify(treedata).replace(/name/g, "label")
  );
 console.log("-------")
 console.log(treedata)