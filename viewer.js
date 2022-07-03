// var selectedProject = sessionStorage.getItem("selectedProject");
// document.getElementById('iframeId').src = selectedProject;
import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xe1e1f0) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("./node_modules/web-ifc/");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

loadIfc('./IFC/01.ifc');