export default {
  de: {
    translation: {
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
        invalidUrlErrorMsg: 'Ungültige URL. Bitte geben Sie eine gültige URL wie z.B. ' +
          'https://ows.terrestris.de/osm/service ein.',
        version: 'Version',
        requestWmsGetCapabilitiesInstruction: 'Bitte geben Sie eine gültige WMS GetCapabilities Adresse ein ' +
          'und bestätigen Sie die Eingabe mit \'Enter ↲\' oder über den Button rechts vom Eingabefeld.'

      },
      BasicMapComponent: {
        processedLayersFolder: 'Prozessierte Layer'
      },
      CookieBanner: {
        info:
          'Wir verwenden technisch notwendige Erstanbieter-Cookies, um Ihnen die bestmögliche Nutzung unserer ' +
          'Website zu ermöglichen. Wenn Sie diese Website weiterhin nutzen, gehen wir davon aus, ' +
          'dass Sie damit zufrieden sind.',
        button: 'Akzeptieren'
      },
      Permalink: {
        title: 'Teilen',
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
        circle: 'Kreis',
        delete: 'Löschen',
        export: 'Exportieren',
        line: 'Linie',
        modalPromptCancelButtonText: 'Abbrechen',
        modalPromptOkButtonText: 'Ok',
        modalPromptTitle: 'Text eingeben',
        modify: 'Bearbeitung',
        point: 'Punkt',
        polygon: 'Polygon',
        rectangle: 'Rechteck',
        text: 'Anmerkung',
        upload: 'Hochladen'
      },
      DeleteAllButton:{
        deleteAll: 'Alles Löschen',
        confirmMessage: 'Bitte bestätigen Sie, dass Sie alle Zeichnungen löschen möchten.'
      },
      StylingDrawer: {
        openColorPalette: 'Farbpalette öffnen',
        closeColorPalette: 'Farbpalette schließen',
        title: 'Farbschema bearbeiten'
      },
      FeatureInfo: {
        usageHint:
          'Klicken Sie in die Karte, um Detailinformationen zu erhalten.'
      },
      FileUpload: {
        upload: 'Dateien hochladen'
      },
      ImageUpload: {
        upload: 'Bilder hochladen'
      },
      LayerTree: {
        transparency: 'Transparenz',
        noLegendAvailable: 'Keine Legende verfügbar'
      },
      LayerTreeContextMenu: {
        layerZoomToExtent: 'Auf Layerausdehnung zoomen',
        extentError: 'Konnte nicht auf die Layerausdehnung zoomen',
        extentNotSupportedWarning: 'Zoom auf Layerausdehnung wird für diesen Layertyp nicht unterstützt',
        removeLayer: 'Layer entfernen',
        showLegend: 'Legende anzeigen',
        hideLegend: 'Legende ausblenden',
        downloadLayer: 'Layer exportieren ({{formatName}})',
        editLayer: 'Layer bearbeiten',
        layerDetails: 'Eigenschaften'
      },
      LayerDetailsModal: {
        title: 'Eigenschaften des Layers {{layerName}}',
        internalConfigurationButtonTooltip: 'Interne Konfiguration anzeigen',
        internalConfigurationButtonTooltipPressed: 'Interne Konfiguration verbergen'
      },
      LayerDetails: {
        noDataPlaceholder: '-',
        layerNameLabel: 'Name',
        layerTitleLabel: 'Titel',
        serviceAbstractLabel: 'Service Beschreibung',
        abstractLabel: 'Beschreibung',
        accessConstraintsLabel: 'Nutzungseinschränkungen',
        capabilitiesUrlLabel: 'GetCapabilities URL',
        contactLabel: 'Kontakt',
        minScaleLabel: 'Min. Maßstab',
        maxScaleLabel: 'Max. Maßstab',
        bboxLabel: 'Bounding Box',
        errorMessage: 'Fehler beim Laden der Layer Capabilities'
      },
      LayerConfiguration: {
        errorMessage: 'Fehler beim Laden der internen Konfiguration'
      },
      ToolMenu: {
        expand: 'Menu ausklappen',
        collapse: 'Menu einklappen',
        measure: 'Messen',
        draw: 'Zeichnen',
        featureInfo: 'Karteninhalte abfragen',
        addWms: 'WMS hinzufügen',
        uploadData: 'Daten hochladen',
        print: 'Export',
        layertree: 'Karten',
        languageSelect: 'Sprachauswahl',
        searchable: 'Der Inhalt dieses Layers kann im Suchfeld abgefragt werden',
        queryable: 'Der Inhalt dieses Layers kann mit dem Werkzeug \'Karteninhalte abfragen\' abgefragt werden',
        editable: 'Die Features dieses Layers sind editierbar'
      },
      MapToolbar: {
        zoomInTooltip: 'Hereinzoomen',
        zoomOutTooltip: 'Herauszoomen',
        geoLocation: 'Geolokalisierung'
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
        initErrorMsg:
          'Der Kartendruck Generator konnte nicht initialisiert werden.',
        outputFormatPlaceholder: 'Bitte wählen Sie ein Ausgabeformat aus',
        resolutionPlaceholder: 'Bitte wählen Sie eine Ausgabequalität aus',
        managerErrorMessage: 'Fehler bei der Initialisierung der Export-Engine'
      },
      Header: {
        backToHome: 'Zurück zur Startseite'
      },
      Footer: {
        refSystem: 'Bezugssystem',
        scale: 'Maßstab',
        mousePosition: 'Mausposition',
        imprint: 'Impressum',
        contact: 'Kontakt',
        privacypolicy: 'Datenschutz',
        about: 'Über',
        aboutTooltip: 'Zeige die Beschreibung und Versionsinformationen'
      },
      Index: {
        applicationLoadErrorMessage: 'Fehler beim Laden der Applikation',
        applicationLoadErrorDescription:
          'Die Applikation mit der ID {{applicationId}} konnte nicht geladen werden.',
        applicationLoadByNameErrorDescription:
          'Die Applikation mit dem Namen {{applicationName}} konnte nicht geladen werden.',
        errorMessage: 'Fehler beim Laden der Applikation',
        errorDescription: 'Aufgrund eines unerwarteten Fehlers konnte die Applikation nicht geladen werden.',
        errorDescriptionAppIdNotSet: 'Keine Applikations-ID angegeben. Bitte geben Sie die ID als Abfrageparameter an, z.B. ?applicationId=1909',
        errorDescriptionAppConfigNotFound: 'Die Applikation mit der ID {{applicationId}} konnte nicht geladen werden.',
        errorDescriptionAppConfigByNameNotFound: 'Die Applikation mit dem Namen {{applicationName}} konnte nicht geladen werden.',
        errorDescriptionAppConfigStaticNotFound: 'Die Konfiguration der Applikation konnte nicht geladen werden.',
        permissionDeniedUnauthorized: 'Dies ist keine öffentliche Applikation. Anmeldung erforderlich.',
        rerouteToLoginPage: 'Zur Anmeldeseite.'
      },
      UserMenu: {
        settingsMenuTitle: 'Profil bearbeiten',
        logoutMenuTitle: 'Ausloggen',
        loginMenuTitle: 'Anmelden',
        loginTooltip: 'Zur Anmeldung'
      },
      DocumentationButton: {
        tooltip: 'Öffne die Dokumentation'
      },
      WmsTimeSlider: {
        title: 'Zeitlicher Bezug',
        default: 'Keine Daten gefunden'
      },
      UploadDataModal: {
        title: 'Daten hochladen',
        uploadedDataFolder: 'Hochgeladene Daten',
        description: 'Klicken Sie oder ziehen Sie die Datei zum Hochladen in diesen Bereich',
        hint: 'Die üblichen Dateiformate wie Geopackage, GeoJSON, Shapefile (gebündelt als *.zip) und GeoTIFF werden unterstützt',
        success: 'Datei {{fileName}} wurde erfolgreich geladen',
        error: {
          general: 'Fehler beim Hochladen der Datei {{fileName}}',
          supportedFormats: 'Der Dateityp ist nicht unterstützt ({{supportedFormats}})'
        },
        selectEntriesHint: 'Wählen Sie die Einträge aus, die der Karte hinzugefügt werden sollen:',
        nameColumnTitle: 'Name',
        addSelectedButtonTitle: 'Ausgewählte Einträge hinzufügen',
        advancedOptionsLabel: 'Erweiterte Optionen',
        selectProjectionPlaceholder: 'Wählen Sie das Koordinatensystem der Daten (optional)',
        favouritesLabel: 'Favoriten',
        othersLabel: 'Alle'
      },
      MultiSearch: {
        searchInViewBox: 'Im aktuellen Kartenausschnitt suchen',
        searchData: 'Layerdaten durchsuchen',
        searchGeocoder: 'Ortssuche',
        searchPlaceholder: 'Orts- und Layersuche…',
        searchPlaceholderGeocoderOnly: 'Suche nach Orten, Straßen, POIs…',
        searchPlaceholderDataOnly: 'Suche nach Inhalten in Layern…',
        settingsTooltip: 'Einstellungen',
        placeholder: 'e, POI usw.'
      },
      EditFeatureDrawer: {
        featureEditor: 'Objekteditor',
        noLayerFoundError: 'Kein passender Layer gefunden - das Editieren ist nicht möglich.',
        isFeatureLockedErrorMsg: 'Das ausgewählte Objekt wird bereits in einer anderen Sitzung bearbeitet.',
        closeDrawerWarnTitle: 'Wollen Sie wirklich fortfahren?',
        closeDrawerWarnContent: 'Dadurch werden alle nicht gespeicherten Änderungen an dem Objekt verworfen.'
      },
      EditFeatureSwitch: {
        usageHint: 'Objekt zum Editieren auf der Karte auswählen oder…',
        limitedUsageHint: 'Zum Editieren bitte eine Objekt auf der Karte auswählen',
        createFeature: 'Neues Objekt erstellen'
      },
      EditFeatureFullForm: {
        saveErrorMsg: 'Das Objekt konnte nicht gespeichert werden',
        deleteErrorMsg: 'Das Objekt konnte nicht gelöscht werden'
      },
      EditFeatureGeometryToolbar: {
        draw: 'Neue Geometrie zeichnen',
        edit: 'Geometrie editieren',
        delete: 'Geometrie löschen',
        undo: 'Rückgängig',
        redo: 'Wiederherstellen'
      },
      Attribution: {
        title: 'Attribute',
        add: 'Attribut hinzufügen',
        select: 'Wählen Sie zunächst eine Geometrie aus.',
        submit: 'Speichern'
      },
      AttributionRow: {
        missingKey: 'Fehlender Name',
        missingValue: 'Fehlender Wert',
        keyPlaceholder: 'Name',
        valuePlaceholder: 'Wert',
        keyInUse: 'Dieser Name existiert bereits!'
      },
      AttributionPopConfirm:{
        title: 'Attribut löschen?',
        okText: 'Löschen',
        cancelText: 'Abbrechen'
      },
      ResetButton: {
        title: 'Zurücksetzen'
      },
      notificationDeleteText:{
        title: 'Drücke "Speichern" um die Änderung zu bestätigen.',
        info: 'Wenn "Übernehmen" nicht geklickt wird, werden alle an dieser Zeichnung vorgenommenen Änderungen verworfen.'
      },
      notificationApplyText:{
        title: 'Änderungen wurden erfolgreich gespeichert!'
      },
      SaveButton: {
        title: 'Speichern',
        errorNoGeometry: 'Objekt kann ohne Geometrie nicht gespeichert werden.'
      },
      SearchResultDrawer: {
        title: 'Suchergebnisse'
      },
      DeleteButton: {
        title: 'Objekt löschen',
        confirm: 'Das Objekt wird vollständig gelöscht. Fortfahren?'
      },
      EditFeatureButton: {
        title: 'Objekt bearbeiten'
      },
      FeaturePropertyGrid: {
        key: 'Name',
        value: 'Wert'
      },
      PaginationToolbar: {
        copyAsGeoJson: 'Als GeoJSON kopieren (inkl. Geometrie)',
        copyAsObject: 'Als Objekt kopieren (nur angezeigte Werte)',
        editDisabled: 'Layer ist nicht editierbar',
        editFeature: 'Feature editieren'
      },
      JsonModal: {
        buttonTitle: 'Öffne {{propertyName}}'
      },
      ReferenceTable: {
        modalTitle: 'Details zu {{referenceValue}}',
        defaultModalTitle: 'Details',
        defaultRowPlaceholder: 'Klicken Sie auf den Button, um die Details anzuzeigen'
      },
      EditReferenceTable: {
        modalTitle: 'Details zu {{referenceValue}}',
        confirmDeleteTitle: 'Das referenzierte Objekt wird vollständig gelöscht. Fortfahren?'
      },
      ImportDataModal: {
        title: 'Daten importieren',
        description: 'Klicken Sie oder ziehen Sie die Datei zum Importieren in diesen Bereich',
        hint: 'Unterstütztes Dateiformat für den Import ist GeoJSON (*.geojson oder *.json)',
        success: 'Die Features wurden erfolgreich importiert',
        error: {
          supportedFormats: 'Der Dateityp ist nicht unterstützt ({{supportedFormats}})',
          parsing: 'Die Datei konnte nicht gelesen werden'
        }
      },
      useNominatimSearchEngine: {
        title: 'Ortssuche'
      },
      StylingComponent: {
        defaultStyleName: 'Standardstil',
        defaultAreaStyleName: 'Polygon',
        defaultLineStyleName: 'Linie',
        defaultPointStyleName: 'Punkt',
        defaultTextStyleName: 'Text'
      }
    }
  },
  en: {
    translation: {
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
        invalidUrlErrorMsg: 'Invalid URL specified. Please provide an URL like https://ows.terrestris.de/osm/service',
        version: 'Version',
        requestWmsGetCapabilitiesInstruction: 'Please provide a valid GetCapabilities URL and submit ' +
          'your input by pressing the \'Enter ↲\' key or by clicking on the button right of the field.'
      },
      BasicMapComponent: {
        processedLayersFolder: 'Processed layers'
      },
      CookieBanner: {
        info:
          'We use technically necessary first-party cookies to ensure that we give you the best experience ' +
          'on our website. If you continue to use this site we will assume that you are happy with it.',
        button: 'Accept'
      },
      Permalink: {
        title: 'Share',
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
      DeleteAllButton:{
        deleteAll: 'Delete all',
        confirmMessage: 'Please confirm, that you wish to delete all drawings.'
      },
      StylingDrawer: {
        openColorPalette: 'Open color palette',
        closeColorPalette: 'Close color palette',
        title: 'Modify color scheme'
      },
      FeatureInfo: {
        usageHint:
          'Click on the map to get details about the clicked coordinate.'
      },
      FileUpload: {
        upload: 'Upload files'
      },
      ImageUpload: {
        upload: 'Upload images'
      },
      LayerTree: {
        transparency: 'Transparency',
        noLegendAvailable: 'No legend available'
      },
      LayerTreeContextMenu: {
        layerZoomToExtent: 'Zoom to layer extent',
        extentError: 'Could not zoom to layer extent',
        extentNotSupportedWarning: 'Zoom to layer extent is not supported for this layer type',
        removeLayer: 'Remove layer',
        showLegend: 'Show legend',
        hideLegend: 'Hide legend',
        downloadLayer: 'Export layer as {{formatName}}',
        editLayer: 'Edit layer',
        layerDetails: 'Properties'
      },
      LayerDetailsModal: {
        title: 'Properties of layer {{layerName}}',
        internalConfigurationButtonTooltip: 'Show internal configuration',
        internalConfigurationButtonTooltipPressed: 'Hide internal configuration'
      },
      LayerDetails: {
        noDataPlaceholder: '-',
        layerNameLabel: 'Name',
        layerTitleLabel: 'Title',
        serviceAbstractLabel: 'Service abstract',
        abstractLabel: 'Abstract',
        accessConstraintsLabel: 'Access constraints',
        capabilitiesUrlLabel: 'GetCapabilities URL',
        contactLabel: 'Contact',
        minScaleLabel: 'Min. scale',
        maxScaleLabel: 'Max. scale',
        bboxLabel: 'Bounding box',
        errorMessage: 'Error while loading the layer capabilities'
      },
      LayerConfiguration: {
        errorMessage: 'Error while loading the internal configuration'
      },
      ToolMenu: {
        expand: 'Expand',
        collapse: 'Collapse',
        measure: 'Measure',
        draw: 'Draw',
        featureInfo: 'Query map features',
        addWms: 'Add WMS',
        uploadData: 'Upload data',
        print: 'Export',
        layertree: 'Maps',
        languageSelect: 'Language selector',
        searchable: 'The contents of this layer can be queried in the search input',
        queryable: 'The contents of this layer can be queried in the query map features tool',
        editable: 'The features of this layer are editable'
      },
      MapToolbar: {
        zoomInTooltip: 'Zoom-in',
        zoomOutTooltip: 'Zoom-out',
        geoLocation: 'Geolocation'
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
      Header: {
        backToHome: 'Back to home'
      },
      Footer: {
        refSystem: 'Reference system',
        scale: 'Scale',
        mousePosition: 'Mouse position',
        imprint: 'Imprint',
        contact: 'Contact',
        privacypolicy: 'Privacy',
        about: 'About',
        aboutTooltip: 'Show description and version information'
      },
      Index: {
        applicationLoadErrorMessage: 'Error while loading the application',
        applicationLoadErrorDescription:
          'The application with ID {{applicationId}} could not be loaded correctly.',
        applicationLoadByNameErrorDescription:
          'The application with the name {{applicationName}} could not be loaded correctly.',
        errorMessage: 'Error while loading the application',
        errorDescription: 'An unexpected error occurred while loading the application.',
        errorDescriptionAppIdNotSet: 'No application ID given. Please provide the ID as query parameter, e.g. ?applicationId=1909',
        errorDescriptionAppConfigNotFound: 'The application with ID {{applicationId}} could not be loaded correctly.',
        errorDescriptionAppConfigByNameNotFound: 'The application with the name {{applicationName}} could not be loaded correctly.',
        errorDescriptionAppConfigStaticNotFound: 'The configuration of the application could not be loaded correctly.',
        permissionDeniedUnauthorized: 'This application is not public. Authentication required.',
        rerouteToLoginPage: 'To login page.'
      },
      UserMenu: {
        settingsMenuTitle: 'Edit profile',
        logoutMenuTitle: 'Logout',
        loginMenuTitle: 'Login',
        loginTooltip: 'Go to login'
      },
      DocumentationButton: {
        tooltip: 'Open the documentation'
      },
      WmsTimeSlider: {
        title: 'Time reference',
        default: 'No data found'
      },
      UploadDataModal: {
        title: 'Upload data',
        uploadedDataFolder: 'Uploaded data',
        description: 'Click or drag file to this area to upload',
        hint: 'The common formats like Geopackage, GeoJSON, Shapefile (bundled as *.zip) and GeoTIFF are supported',
        success: 'Successfully uploaded file {{fileName}}',
        error: {
          general: 'Error while uploading file {{fileName}}',
          supportedFormats: 'The given file type does not match the supported ones ({{supportedFormats}})'
        },
        selectEntriesHint: 'Please select the entries you want to add to the map:',
        nameColumnTitle: 'Name',
        addSelectedButtonTitle: 'Add selected entries',
        advancedOptionsLabel: 'Advanced options',
        selectProjectionPlaceholder: 'Select the projection of the dataset (optional)',
        favouritesLabel: 'Favourites',
        othersLabel: 'All'
      },
      MultiSearch: {
        searchInViewBox: 'Search in current extent',
        searchData: 'Search layer data',
        searchGeocoder: 'Search location',
        searchPlaceholder: 'Location and layer search…',
        searchPlaceholderGeocoderOnly: 'Search for locations, streets, POIs…',
        searchPlaceholderDataOnly: 'Search in the layer contents…',
        settingsTooltip: 'Settings'
      },
      EditFeatureDrawer: {
        featureEditor: 'Feature editor',
        noLayerFoundError: 'No layer found - the editing is not possible.',
        isFeatureLockedErrorMsg: 'The selected feature is already being edited in another session.',
        closeDrawerWarnTitle: 'Do you really want to quit?',
        closeDrawerWarnContent: 'This will discard any unsaved changes to the feature.'
      },
      EditFeatureSwitch: {
        usageHint: 'Select an existing feature for editing on the map or…',
        limitedUsageHint: 'To edit please select an object on the map',
        createFeature: 'Create new feature'
      },
      EditFeatureFullForm: {
        saveErrorMsg: 'Error while saving the feature',
        deleteErrorMsg: 'Error while deleting the feature'
      },
      EditFeatureGeometryToolbar: {
        draw: 'Draw new geometry',
        edit: 'Edit geometry',
        delete: 'Delete geometry',
        undo: 'Undo',
        redo: 'Redo'
      },
      Attribution: {
        title: 'Properties',
        add: 'Add Property',
        select: 'Please select a geometry first.',
        submit: 'Apply'
      },
      AttributionRow: {
        missingKey: 'Missing Key',
        missingValue: 'Missing Value',
        keyPlaceholder: 'Key',
        valuePlaceholder: 'Value',
        keyInUse: 'Key already exists!'
      },
      AttributionPopConfirm:{
        title: 'Delete property?',
        okText: 'Delete',
        cancelText: 'Cancel'
      },
      ResetButton: {
        title: 'Reset'
      },
      notificationDeleteText:{
        title: 'Press "Apply" to confirm changes.',
        info: 'Not pressing "Apply" will reverse all changes made to this drawing.'
      },
      notificationApplyText:{
        title: 'Changes were applied successfully!'
      },
      SaveButton: {
        title: 'Save',
        errorNoGeometry: 'Cannot save feature without geometry.'
      },
      SearchResultDrawer: {
        title: 'Search results'
      },
      DeleteButton: {
        title: 'Delete feature',
        confirm: 'The feature will be deleted completely. Proceed?'
      },
      EditFeatureButton: {
        title: 'Edit feature'
      },
      FeaturePropertyGrid: {
        key: 'Name',
        value: 'Value'
      },
      PaginationToolbar: {
        copyAsGeoJson: 'Copy as GeoJSON (incl. geometry)',
        copyAsObject: 'Copy as object (displayed values only)',
        editDisabled: 'This layer is not editable',
        editFeature: 'Edit feature'
      },
      JsonModal: {
        buttonTitle: 'Show {{propertyName}}'
      },
      ReferenceTable: {
        modalTitle: 'Details for {{referenceValue}}',
        defaultModalTitle: 'Details',
        defaultRowPlaceholder: 'Click the button to show the details'
      },
      EditReferenceTable: {
        modalTitle: 'Details for {{referenceValue}}',
        confirmDeleteTitle: 'The referenced feature will be deleted completely. Proceed?'
      },
      ImportDataModal: {
        title: 'Import data',
        description: 'Click or drag file to this area to import',
        hint: 'Supported file format is GeoJSON (*.geojson or *.json)',
        success: 'Successfully imported the features',
        error: {
          supportedFormats: 'The given file type does not match the supported ones ({{supportedFormats}})',
          parsing: 'Error while reading the file'
        }
      },
      useNominatimSearchEngine: {
        title: 'Location'
      },
      StylingComponent: {
        defaultStyleName: 'Default style',
        defaultAreaStyleName: 'Polygon',
        defaultLineStyleName: 'Line',
        defaultPointStyleName: 'Point',
        defaultTextStyleName: 'Text'
      }
    }
  }
};
