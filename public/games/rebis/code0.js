gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDSaintVincentObjects1= [];
gdjs.Untitled_32sceneCode.GDSaintVincentObjects2= [];
gdjs.Untitled_32sceneCode.GDPolandObjects1= [];
gdjs.Untitled_32sceneCode.GDPolandObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPolandObjects1Objects = Hashtable.newFrom({"Poland": gdjs.Untitled_32sceneCode.GDPolandObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.Untitled_32sceneCode.GDPolandObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPolandObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPolandObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPolandObjects1[i].setScale(gdjs.random(3));
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDSaintVincentObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSaintVincentObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPolandObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPolandObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
