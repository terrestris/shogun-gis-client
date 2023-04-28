export default {
  de: {
    translation: {
      AppStateManagement: {
        // TODO translate
        buttonTitle: 'Save',
        buttonTooltip: 'Download application configuration',
        modalTitle: 'Projekt speichern',
        createStateButtonTitle: 'Projekt erstellen',
        createStateButtonTooltip: '',
        updateStateButtonTitle: 'Projekt aktualisieren',
        updateStateButtonTooltip: '',
        permissionModalTitle: 'Berechtigungen setzen',
        confirmUpdateTitle: 'Fortfahren?',
        updateStateHint: 'Projekt {{stateName}} ({{stateId}}) überschreiben?',
        confirmDeleteTitle: 'Fortfahren?',
        deleteStateHint: 'Projekt {{stateName}} ({{stateId}}) löschen?',
        confirmCreateTitle: 'Projekt speichern',
        createStateHint: 'Geben Sie einen Namen für das Projekt an',
        createStateNamePlaceholder: 'Projektnamen angeben',
        confirmLoadTitle: 'Fortfahren?',
        loadStateHint: 'Projekt {{stateName}} laden und aktuellen Stand überschreiben?',
        copyClipboardNotificationTitle: 'Success',
        copyClipboardNotificationDescription: 'Link erfolgreich in die Zwischenablage kopiert',
        deleteButtonTooltip: 'Delete',
        downloadButtonTooltip: 'Download',
        shareButtonTooltip: 'Teilen',
        permissionButtonTooltip: 'Permissions',
        loadButtonTooltip: 'Load',
        idColumnTitle: 'ID',
        createdColumnTitle: 'Created',
        modifiedColumnTitle: 'Modified',
        nameColumnTitle: 'Name'
      },
      AppStateUpload: {
        tooltip: 'Applikationskonfiguration laden',
        title: 'Laden'
      },
      ApplicationInfo: {
        title: 'Über',
        clientVersionTitle: 'Client Version',
        backendVersionTitle: 'Backend Version'
      },
      AddLayerModal: {
        addSelectedLayers: 'Auswahl hinzufügen',
        addAllLayers: 'Alle hinzufügen',
        inputPlaceholder: 'WMS GetCapabilities URL angeben…',
        externalWmsFolder: 'Externe Themen',
        title: 'WMS hinzufügen',
        columnTitle: 'Name',
        errorMessage: 'Fehler',
        errorDescription: 'Das Capabilities Dokument konnte nicht geladen werden, bitte prüfen Sie die URL',
        version: 'Version'
      },
      BasicMapComponent: {
        processedLayersFolder: 'Prozessierte Layer'
      },
      Header: {
        loadedStateTooltip: 'Der Client basiert auf einer eigenen Applikationskonfiguration'
      },
      Permalink: {
        title: 'Teilen',
        twitterTooltip: 'Link via Twitter teilen',
        whatsAppTooltip: 'Link via WhatsApp teilen',
        mailTooltip: 'Link via Mail teilen',
        copyTooltip: 'Link in die Zwischenablage kopieren',
        copiedToClipboard: 'Link wurde in Zwischenablage kopiert',
        copyToClipboardFailed: 'Link konnte nicht kopiert werden'
      },
      Measure: {
        title: 'Messen',
        line: 'Entfernung',
        area: 'Fläche',
        clicktodrawline: 'Zum Zeichnen einer Linie klicken',
        clicktodrawarea: 'Zum Zeichnen einer Fläche klicken'
      },
      Draw: {
        point: 'Punkt',
        line: 'Linie',
        polygon: 'Polygon',
        circle: 'Kreis',
        rectangle: 'Rechteck',
        text: 'Anmerkung',
        modify: 'Bearbeitung',
        upload: 'Hochladen',
        delete: 'Löschen',
        export: 'Exportieren'
      },
      StylingDrawer: {
        pickColor: 'Farbschema bearbeiten',
        title: 'Farbschema bearbeiten'
      },
      FeatureInfo: {
        usageHint: 'Klicken Sie in die Karte, um Detailinformationen zu erhalten.'
      },
      LayerTree: {
        transparency: 'Transparenz',
        noLegendAvailable: 'Keine Legende verfügbar'
      },
      LayerTreeContextMenu: {
        layerZoomToExtent: 'Auf Layerausdehnung zoomen',
        extentError: 'Konnte nicht auf die Layerausdehnung zoomen',
        removeLayer: 'Layer entfernen',
        showLegend: 'Legende anzeigen',
        hideLegend: 'Legende ausblenden',
        downloadLayer: 'Layer exportieren ({{formatName}})'
      },
      ToolMenu: {
        expand: 'Menu ausklappen',
        collapse: 'Menu einklappen',
        measure: 'Messen',
        draw: 'Zeichnen',
        featureInfo: 'Karteninhalte abfragen',
        addWms: 'WMS hinzufügen',
        print: 'Export',
        layertree: 'Karten',
        saveLoad: 'Speichern / Laden',
        languageSelect: 'Sprachauswahl'
      },
      PrintForm: {
        title: 'Kartentitel',
        initialTitle: 'Druckausgabe',
        titlePlaceholder: 'Bitte geben Sie einen Titel ein',
        comment: 'Bemerkung',
        commentPlaceholder: 'Bitte geben Sie einen Kommentar ein',
        layout: 'Vorlage',
        dpi: 'Auflösung',
        format: 'Format',
        scale: 'Maßstab',
        downloadBtnText: 'Ausdruck erzeugen',
        printJobErrorMsg: 'Der Kartenausdruck konnte nicht erzeugt werden',
        initErrorMsg: 'Der Kartendruck Generator konnte nicht initialisiert werden.',
        outputFormatPlaceholder: 'Bitte wählen Sie ein Ausgabeformat aus',
        resolutionPlaceholder: 'Bitte wählen Sie eine Ausgabequalität aus',
        managerErrorMessage: 'Fehler bei der Initialisierung der Export-Engine'
      },
      Footer: {
        refSystem: 'Bezugssystem',
        scale: 'Maßstab',
        mousePosition: 'Mausposition',
        imprint: 'Impressum',
        contact: 'Kontakt',
        privacypolicy: 'Datenschutz'
      },
      Index: {
        applicationLoadErrorMessage: 'Fehler beim Laden der Applikation',
        applicationLoadErrorDescription: 'Die Applikation mit der ID {{applicationId}} konnte nicht geladen werden. ' +
          'Die Standardkonfiguration wird stattdessen geladen.',
        errorMessage: 'Fehler beim Laden der Applikation',
        errorDescription: 'Aufgrund eines unerwarteten Fehlers konnte die Applikation nicht geladen werden. ' +
          'Bitte laden Sie die Seite erneut.'
      },
      Nominatim: {
        placeholder: 'Ortsname, Straßenname, Stadtteilname, POI usw.'
      },
      UserMenu: {
        settingsMenuTitle: 'Profil bearbeiten',
        infoMenuTitle: 'Über',
        logoutMenuTitle: 'Ausloggen',
        loginMenuTitle: 'Anmelden'
      },
      WmsTimeSlider: {
        title: 'Zeitlicher Bezug',
        default: 'Keine Daten gefunden'
      },
      UserPermissionModal: {
        loadErrorMsg: 'Fehler beim Laden der Berechtigungen',
        saveErrorMsg: 'Fehler beim Speichern der Berechtigung für die Nutzer mit den IDs: {{userIds}}',
        openModalButtonTooltipTitle: 'Berechtigung hinzufügen',
        title: 'Berechtigung hinzufügen',
        description: 'Wählen Sie einen oder mehrere Nutzer sowie die zugehörige Berechtigung aus.',
        userSelectLabel: 'Nutzername oder Email Adresse',
        userSelectExtra: 'Wählen Sie die Nutzer aus der Liste aus oder geben Sie einen ' +
          'Suchbegriff (Nutzername oder Email Adresse) ein',
        userSelectPlaceholder: 'Nutzer auswählen…',
        permissionSelectLabel: 'Berechtigung',
        permissionSelectExtra: 'Wählen Sie die Berechtigung aus, die die Nutzer erhalten sollen.'
      },
      UserPermissionGrid: {
        loadErrorMsg: 'Fehler beim Laden der Berechtigungen',
        updateErrorMsg: 'Fehler beim Aktualisieren der Berechtigung',
        deleteErrorMsg: 'Fehler beim Löschen der Berechtigung',
        filterInputPlaceholder: 'Suche…',
        filterSearchButtonText: 'Suche',
        filterResetButtonText: 'Zurücksetzen',
        userColumnTitle: 'Name',
        permissionColumnTitle: 'Berechtigung',
        deletePermissionButtonTooltip: 'Berechtigung löschen'
      },
      PermissionSelect: {
        placeholder: 'Berechtigung auswählen…',
        readLabel: 'Lesen',
        readUpdateLabel: 'Aktualisieren',
        readUpdateDeleteLabel: 'Aktualisieren & Löschen',
        adminLabel: 'Besitzer'
      }
    }
  },
  en: {
    translation: {
      // TODO translate
      AppStateManagement: {
        buttonTitle: 'Save',
        buttonTooltip: 'Download application configuration',
        modalTitle: 'Projekt speichern',
        createStateButtonTitle: 'Projekt erstellen',
        createStateButtonTooltip: '',
        updateStateButtonTitle: 'Projekt aktualisieren',
        updateStateButtonTooltip: '',
        permissionModalTitle: 'Berechtigungen setzen',
        confirmUpdateTitle: 'Fortfahren?',
        updateStateHint: 'Projekt {{stateName}} ({{stateId}}) überschreiben?',
        confirmDeleteTitle: 'Fortfahren?',
        deleteStateHint: 'Projekt {{stateName}} ({{stateId}}) löschen?',
        confirmCreateTitle: 'Projekt speichern',
        createStateHint: 'Geben Sie einen Namen für das Projekt an',
        createStateNamePlaceholder: 'Projektnamen angeben',
        confirmLoadTitle: 'Fortfahren?',
        loadStateHint: 'Projekt {{stateName}} laden und aktuellen Stand überschreiben?',
        copyClipboardNotificationTitle: 'Success',
        copyClipboardNotificationDescription: 'Link erfolgreich in die Zwischenablage kopiert',
        deleteButtonTooltip: 'Delete',
        downloadButtonTooltip: 'Download',
        shareButtonTooltip: 'Teilen',
        permissionButtonTooltip: 'Permissions',
        loadButtonTooltip: 'Load',
        idColumnTitle: 'ID',
        createdColumnTitle: 'Created',
        modifiedColumnTitle: 'Modified',
        nameColumnTitle: 'Name'
      },
      AppStateUpload: {
        tooltip: 'Load application configuration',
        title: 'Load'
      },
      ApplicationInfo: {
        title: 'About',
        clientVersionTitle: 'Client version',
        backendVersionTitle: 'Backend version'
      },
      AddLayerModal: {
        addSelectedLayers: 'Add selected',
        addAllLayers: 'Add all',
        inputPlaceholder: 'Enter a WMS GetCapabilities URL…',
        externalWmsFolder: 'External layers',
        title: 'Add WMS',
        columnTitle: 'Name',
        errorMessage: 'Error',
        errorDescription: 'Could not load the provided Capabilities document, please check the validity of the URL',
        version: 'Version'
      },
      BasicMapComponent: {
        processedLayersFolder: 'Processed layers'
      },
      Header: {
        loadedStateTooltip: 'You\'re viewing an application based on a custom application configuration'
      },
      Permalink: {
        title: 'Share',
        twitterTooltip: 'Share link via Twitter',
        whatsAppTooltip: 'Share link via WhatsApp',
        mailTooltip: 'Share link via Mail',
        copyTooltip: 'Copy link to Clipboard',
        copiedToClipboard: 'Copied to clipboard',
        copyToClipboardFailed: 'Could not copy link to clipboard'
      },
      Measure: {
        title: 'Measure',
        line: 'Distance',
        area: 'Area',
        clicktodrawline: 'Click to draw line',
        clicktodrawarea: 'Click to draw area'
      },
      Draw: {
        point: 'Point',
        line: 'Line',
        polygon: 'Polygon',
        circle: 'Circle',
        rectangle: 'Rectangle',
        text: 'Annotation',
        modify: 'Edit',
        upload: 'Upload',
        delete: 'Delete',
        export: 'Export'
      },
      StylingDrawer: {
        pickColor: 'Modify color scheme',
        title: 'Modify color scheme'
      },
      FeatureInfo: {
        usageHint: 'Click on the map to get details about the clicked coordinate.'
      },
      LayerTree: {
        transparency: 'Transparency',
        noLegendAvailable: 'No legend available'
      },
      LayerTreeContextMenu: {
        layerZoomToExtent: 'Zoom to layer extent',
        extentError: 'Could not zoom to layer extent',
        removeLayer: 'Remove layer',
        showLegend: 'Show legend',
        hideLegend: 'Hide legend',
        downloadLayer: 'Export layer as {{formatName}}'
      },
      ToolMenu: {
        expand: 'Expand',
        collapse: 'Collapse',
        measure: 'Measure',
        draw: 'Draw',
        featureInfo: 'Query map features',
        addWms: 'Add WMS',
        print: 'Export',
        layertree: 'Maps',
        saveLoad: 'Save / Load',
        languageSelect: 'Language selector'
      },
      PrintForm: {
        title: 'Title',
        initialTitle: 'Title',
        titlePlaceholder: 'Please input a title…',
        comment: 'Comment',
        commentPlaceholder: 'Please enter a comment…',
        layout: 'Layout',
        dpi: 'Resolution',
        format: 'Format',
        scale: 'Scale',
        downloadBtnText: 'Create print',
        printJobErrorMsg: 'Could not generate PDF output',
        initErrorMsg: 'PDF Generator could not be initialized',
        outputFormatPlaceholder: 'Please select an output format',
        resolutionPlaceholder: 'Please select an output quality',
        managerErrorMessage: 'Error while initializing the export engine'
      },
      Footer: {
        refSystem: 'Reference system',
        scale: 'Scale',
        mousePosition: 'Mouse position',
        imprint: 'Imprint',
        contact: 'Contact',
        privacypolicy: 'Privacy'
      },
      Index: {
        applicationLoadErrorMessage: 'Error while loading the application',
        applicationLoadErrorDescription: 'The application with ID {{applicationId}} could not be loaded correctly. ' +
          'You\'re seeing the default application configuration.',
        errorMessage: 'Error while loading the application',
        errorDescription: 'An unexpected error occured while loading the application. Please try to reload the page.'
      },
      Nominatim: {
        placeholder: 'Place name, street name, district name, POI, etc.'
      },
      UserMenu: {
        settingsMenuTitle: 'Edit profile',
        infoMenuTitle: 'About',
        logoutMenuTitle: 'Logout',
        loginMenuTitle: 'Login'
      },
      WmsTimeSlider: {
        title: 'Time reference',
        default: 'No data found'
      },
      UserPermissionModal: {
        loadErrorMsg: 'Error while loading the permissions',
        saveErrorMsg: 'Error while setting the permission for users with IDs: {{userIds}}',
        openModalButtonTooltipTitle: 'Add permission',
        title: 'Add permission',
        description: 'Select one or more users and the respective permission.',
        userSelectLabel: 'Username or email address',
        userSelectExtra: 'Select users from the list or search via username or email address.',
        userSelectPlaceholder: 'Select user(s)…',
        permissionSelectLabel: 'Permission',
        permissionSelectExtra: 'Select the permission the users should be granted.'
      },
      UserPermissionGrid: {
        loadErrorMsg: 'Error while loading the permissions',
        updateErrorMsg: 'Error while updating the permission',
        deleteErrorMsg: 'Error while deleting the permission',
        filterInputPlaceholder: 'Search…',
        filterSearchButtonText: 'Search',
        filterResetButtonText: 'Reset',
        userColumnTitle: 'Name',
        permissionColumnTitle: 'Permission',
        deletePermissionButtonTooltip: 'Delete permission'
      },
      PermissionSelect: {
        placeholder: 'Select a permission…',
        readLabel: 'Read',
        readUpdateLabel: 'Update',
        readUpdateDeleteLabel: 'Update & Delete',
        adminLabel: 'Owner'
      }
    }
  }
};
