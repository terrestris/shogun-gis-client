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
        version: 'Version'
      },
      BasicMapComponent: {
        processedLayersFolder: 'Prozessierte Layer'
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
        downloadLayer: 'Layer exportieren ({{formatName}})',
        editLayer: 'Layer bearbeiten'
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
      UploadDataModal: {
        title: 'Daten hochladen',
        uploadedDataFolder: 'Hochgeladene Daten',
        description: 'Klicken Sie oder ziehen Sie die Datei zum Hochladen in diesen Bereich',
        hint: 'Unterstützte Dateiformate sind Shapefile (gebündelt als *.zip) und GeoTIFF',
        success: 'Datei {{fileName}} wurde erfolgreich geladen und der Layer {{layerName}} erstellt',
        error: {
          general: 'Fehler beim Hochladen der Datei {{fileName}}',
          maxSize: 'Der Upload überschreitet das Limit von {{maxSize}} MB',
          supportedFormats: 'Der Dateityp ist nicht unterstützt ({{supportedFormats}})',
          zipContent: 'Mehrere Geodatensätze innerhalb eines Archivs sind nicht unterstützt'
        }
      },
      MultiSearch: {
        searchInViewBox: 'Im aktuellen Kartenausschnitt suchen',
        searchData: 'Layerdaten durchsuchen',
        searchNominatim: 'Ortssuche (Nominatim)',
        nominatimTitle: 'Ortssuche',
        searchPlaceholder: 'Orts- und Datensuche…'
      },
      EditFeatureDrawer: {
        featureEditor: 'Objekteditor',
        selectFeature: 'Objekt bearbeiten',
        createFeature: 'Objekt erstellen',
        noLayerFoundError: 'Kein passender Layer gefunden - das Editieren ist nicht möglich.'
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
        version: 'Version'
      },
      BasicMapComponent: {
        processedLayersFolder: 'Processed layers'
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
        downloadLayer: 'Export layer as {{formatName}}',
        editLayer: 'Edit layer'
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
      UploadDataModal: {
        title: 'Upload data',
        uploadedDataFolder: 'Uploaded data',
        description: 'Click or drag file to this area to upload',
        hint: 'Supported file formats are Shapefile (bundled as *.zip) and GeoTIFF',
        success: 'Successfully uploaded file {{fileName}} and created layer {{layerName}}',
        error: {
          general: 'Error while uploading file {{fileName}}',
          maxSize: 'The file exceeds the upload limit of {{maxSize}} MB',
          supportedFormats: 'The given file type does not match the supported ones ({{supportedFormats}})',
          zipContent: 'Multiple geodatasets within one archive are not supported'
        }
      },
      MultiSearch: {
        searchInViewBox: 'Search in current extent',
        searchData: 'Search layer data',
        searchNominatim: 'Search nominatim',
        nominatimTitle: 'Nominatim',
        searchPlaceholder: 'Address and data search…'
      },
      EditFeatureDrawer: {
        featureEditor: 'Feature editor',
        selectFeature: 'Edit feature',
        createFeature: 'Create feature',
        noLayerFoundError: 'No layer found - the editing is not possible.'
      }
    }
  }
};
