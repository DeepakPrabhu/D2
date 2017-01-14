function getLabelButton() {
          if(this.model != null && this.model.cwDocId != null)
              this.buttonLabel = "Update";
          else if(this.model != null && this.model.cwDocId == null)
              this.buttonLabel = "Add";
        
}