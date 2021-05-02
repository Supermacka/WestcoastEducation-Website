// Hmm... ShortCut Functions not working???
class Utilites
{
    static addOverlay(interactionElement, interaction, overlayElement)
    {
        interactionElement.addEventListener(`${interaction}`, () =>
        {
            overlayElement.classList.add('hideElement');
        });
    }

    static removeOverlay(interactionElement, interaction, overlayElement)
    {
        interactionElement.addEventListener(`${interaction}`, () =>
        {
            overlayElement.classList.remove('hideElement');
        });
    }
}