function debounce(fn,wait){
    var timeout;
    return function(){
        var context=this;
        var args=arguments;
        if(timeout){
            clearTimeout(timeout);
            timeout=null;
        }
        timeout=setTimeout(()=>{
            fn.apply(context,args);
            clearTimeout(timeout);
            timeout=null;
        },wait);
    }
}


[
    {
        outWarehouseId: 101754,
        outWarehouseName: "明年去巴黎浪-B2C仓",
        stockInCode: "DB101677077536107848208",
        stockOutCode: "DBCK81101754105440147855469",
        skusn: "000343653",
        productName: "抢19点档",
        salesPackageQty: 1,
        salesPackageUnitQty: 1,
        salesPackageCopies: 1,
        warehousePackageCopies: 1,
        warehousePackageUnit: "大件",
        salesPackageUnit: "个",
        inventoryUnit: "个",
        skuSpec: "大",
        vendorCode: "778899",
        vendorName: "供应商7891",
        outSummary: "",
        returnCopies: 0,
        returnScatterCopies: 0,
        returnWholeCopies: 0,
        allottedCopies: 3,
        allottedCopiesScatterCopies: 0,
        allottedCopiesWholeCopies: 3,
        signCopies: 1,
        signScatterCopies: 0,
        signWholeCopies: 1,
        diffReturnCopies: -3,
        diffReturnScatterCopies: 0,
        diffReturnWholeCopies: -3,
        diffSignCopies: 2,
        diffSignScatterCopies: 0,
        diffSignWholeCopies: 2,
        summary: "111",
        producedDate: "",
        warrantyDate: "",
        picture: [
            "http://frxsuatosss.xsyxsc.cn/detailImg/20220302/90percent_a452d0e6-d4a7-4d3d-9313-727fd833d3011646213707178.jpg",
            "https://pro-wms-1259014075.cos.ap-shanghai.myqcloud.com/fileupload/202208/342c9ef9-27c2-498d-877c-c9e387483f17.jpg"
        ]
    }
]